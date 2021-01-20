#  extract coordinate and number of id in that coordinate
import json
from datetime import datetime

if __name__ == "__main__":

	tempArray = []
	finalJSON = []

	with open('geo_out.json', 'r') as fileHandle:
		geoJSON = json.loads(fileHandle.read())
		for location in geoJSON:
			tempDict = {}
			if ((location["geometry"]["coordinate"][0] not in  ["", "0"]) and (location["geometry"]["coordinate"][1] not in  ["", "0"])):
				coordinate = location["geometry"]["coordinate"]
				date = (location["properties"]["start_time"])
				try:
					date_format = datetime.strptime(date, '%Y-%m-%d %H:%M:%S')
				except ValueError:
					date_format = datetime.strptime(date, '%m/%d/%Y %H:%M')
				trip_date = str(date_format.year) + '/' + str(date_format.month)
				coordinate.append(trip_date)
				if coordinate not in tempArray:
					tempDict["coordinate"] = coordinate[:2]
					tempDict["count"] = 1
					tempDict["date"] = trip_date
					finalJSON.append(tempDict)
					tempArray.append(coordinate)
				else:
					for item in finalJSON:
						if item["coordinate"] == coordinate[:2] and item["date"] == trip_date:
							item["count"] += 1

	with open('start_count.js', 'w') as f:
		f.write("startCount = ")
		f.write(json.dumps(finalJSON, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))	
