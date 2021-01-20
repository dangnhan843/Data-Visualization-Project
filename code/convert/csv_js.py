#  convert csv to json
#  python csv_js.py -i fila_nam -f pretty

import sys, getopt
import csv
import json
             
# get  arguments
def main(argv):
    input_file = ''
    output_file = 'out.json'
    format = ''
    try:
        opts, args = getopt.getopt(argv,"hi:o:f:",["ifile=","format="])
    except getopt.GetoptError:
        print 'csv_to_json.py -i <path to inputfile> -f <dump/pretty>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'csv_to_json.py -i <path to inputfile> -f <dump/pretty>'
            sys.exit()
        elif opt in ("-i", "--ifile"):
            input_file = arg
        elif opt in ("-f", "--format"):
            format = arg
    read_csv(input_file, output_file, format)

#get CSV file
def read_csv(file, json_file, format):
    csv_rows = []
    with open(file) as csvfile:
        reader = csv.DictReader(csvfile)
        title = reader.fieldnames
        for row in reader:
            csv_rows.extend([{title[i]:row[title[i]] for i in range(len(title))}])
        write_json(csv_rows, json_file, format)

#convert csv to json
def write_json(data, json_file, format):
    with open(json_file, "w") as f:
        if format == "pretty":
            f.write(json.dumps(data, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))
        else:
            f.write(json.dumps(data))

if __name__ == "__main__":
   main(sys.argv[1:])
