# cz4034-information-retrieval
## Notes:
* Use pycharm and python 3.6
    * With pycharm, you can run from anywhere without having to cd or type `python some_script.py`. You can not use pycharm, but there'll be errors with the syspath.
* **Generates preprocessed data** first before anything!!
    * Preprocessed data won't and shouldn't be included in github, so you'll have to run it first

## Generates Preprocessed File
* Run run_script.py from the top module `python run_script.py` or run it from server/core/data_preprocessing/preprocessing.py

## Reading or writing data
* Use **data_util** module under server.utils
    * Read the method name to know what it's doing and the required parameters
    * Example of usage
```python
from server.utils import data_util
# get all page_ids
data_util.get_page_ids()

# read preprocessed data by page id
page_id="Tripviss"
data = data_util.get_preprocessed_json_data_by_page_id(page_id)

# writing data to json
file_name = "beautiful_data"
data_util.write_data_to_json(data, file_name)
```

## Running any program or server
* Run any program/module: Just run from pycharm (pycharm can run run.py and run_script.py also)
* Running server: `python run.py` from top level directory
* Running modules: `python run_script.py` from top level directory
    * Use run_script.py for testing, you can import whatever module that you want to test here
    
## Running Front-end
* Dependencies:
    * Install node.js
    * Install npm
    * Install jspm globally through npm
    * Install live-server globally through npm
    * Change directory to frontend
        * Run `jspm install` from command line
* Run `live-server .` from command line
* Develop (or testing)!

## Project Structure Directory
* requirements.txt: package dependencies
    * runs pipreqs everytime new package is installed
* run.py: runs server
* run_script.py: runs scripts from top module
* server
    * config.py
    * core
        * classifier
        * crawler
            * crawler.py
        * data_preprocessing
            * preprocessing.py: run this to generate preprocessed csv
        * nlp
        * solr
            * solr_interface.py: interface to the solr api
      * data: stores all the data including raw json and preprocessed csv
        * initial_records.json: updated records
        * records.json: current records
      * handler
        * db_manager.py: http handler for reading, crawling & writing data 
        related to the data directory
        * index.py
        * search.py: http handler related to searching with solr
        * solr_manager.py: http handler related to the solr database
      * server_app.py: flask app
      * utils : utilities, functions that gets repeatedly used 
      everywhere
        * data_util.py: reading and writing data from json and csv. The 
        method names are clear enough but for the lazy:
            * get_page_ids(): get all the page ids
            * get_preprocessed_json_data_by_page_id(page_id): get preprocessed data in json format (array of posts)
            * get_raw_json_data_by_page(page_id): get raw data in json format
            * get_csv_data_by_page_id(page_id): returns dataframe of the preprocesed page_id records csvs
            * get_all_preprocessed_page(): returns all the preprocessed pages into 1 dataframe 
        * text_util.py: processing text, text cleaning utilities, extracting
         info from text (like date)
* frontend
    * package.json
        * src
            * constants: events and urls
            * controllers
            * services: all the http requests

## Number of records in each crawled data:
- Tripviss:176
- visitjapaninternational: 1445
- koreatourism: 4093
- TheSmartLocal: 2856
- indonesia.travel: 3604
- malaysia.travel.sg: 1385
- itsmorefuninthePhilippines: 2657
- incredibleindia: 1090
- visitchinanow: 985
- DiscoverHongKong: 2163
- wonderfulplacesindo: 989
- goturkeytourism: 794

## Solr Search
- query: [example](https://gist.github.com/felixputera/1d90ea9e3f929ec300511bbd8db605bf)
- result: [result](https://gist.github.com/felixputera/e9870a3335396cbdeb4b5b804bdcdc0f)

=======
