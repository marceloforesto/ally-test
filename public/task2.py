import csv
import simplejson
import urllib.request
from datetime import datetime

def getCurrencie(csv, str):                                                                                #function that returns the value of the currency  
    index = csv.find(str)   
    str = csv[index+4:index+14]
    str = str.replace(",", ".")
    return float(str)

def main():
    urlCSV = 'http://www4.bcb.gov.br/Download/fechamento/' + datetime.today().strftime('%Y%m%d') + '.csv'   #collects csv data from the day of execution
    urlJSON = 'https://exports.allyhub.co/'                                                                 #collects the json
    fCSV = urllib.request.urlopen(urlCSV)
    fJSON = urllib.request.urlopen(urlJSON)
    strCSV = fCSV.read().decode('utf-8')
    strJSON = fJSON.read().decode('utf-8')

    data = simplejson.loads(strJSON)
    for course in data:                                                                                     #convert currency for each value
        if (course['BRL'] != ''):                               
            course['AUD'] = course['BRL'] / getCurrencie(strCSV, "AUD") 
            course['EUR'] = course['BRL'] / getCurrencie(strCSV, "EUR")
            course['USD'] = course['BRL'] /getCurrencie(strCSV, "USD")
        elif (course['USD'] != ''):
            course['BRL'] = getCurrencie(strCSV, "USD") * course['USD']
            course['AUD'] = course['BRL'] / getCurrencie(strCSV, "AUD")
            course['EUR'] = course['BRL'] / getCurrencie(strCSV, "EUR")
        elif (course['AUD'] != ''):
            course['BRL'] = getCurrencie(strCSV, "AUD") * course['AUD']
            course['USD'] = course['BRL'] / getCurrencie(strCSV, "USD")
            course['EUR'] = course['BRL'] / getCurrencie(strCSV, "EUR")
        elif (course['EUR'] != ''):
            course['BRL'] = getCurrencie(strCSV, "EUR") * course['EUR']
            course['USD'] = course['BRL'] / getCurrencie(strCSV, "USD")
            course['AUD'] = course['BRL'] / getCurrencie(strCSV, "AUD")

        course['USD'] = round(course['USD'], 2)                                                             #rents the values of the coins
        course['EUR'] = round(course['EUR'], 2)
        course['AUD'] = round(course['AUD'], 2)
        course['BRL'] = round(course['BRL'], 2)
    
    print(data)

if __name__ == "__main__":
    main()