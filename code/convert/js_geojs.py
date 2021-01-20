#  extract json to geo json format
import json
if __name__ == "__main__":
	geoData = []
	with open('out.json') as fileHandler:
		dataDict = fileHandler.read()
		dataJSON = json.loads(dataDict)
		for item in dataJSON:
			geo_data = {}
			geo_data["type"] = "Location"
			geo_data["geometry"] = {"type": "Point", "coordinate": [item["start_lat"],item["start_lon"]]}
			geo_data["properties"] = {}
			for key in item:
				if (key == 'start_lon') or (key == 'start_lat'):
					continue
				geo_data["properties"][key] = item[key]
			geoData.append(geo_data)
	with open('geo_out.json', 'w') as f:
		f.write(json.dumps(geoData, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))