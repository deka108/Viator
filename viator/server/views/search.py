from flask import Blueprint, jsonify, request

search_page = Blueprint('search', __name__)


@search_page.route('/', methods=['GET'])
def search_query():
    query_arg = request.args.get('query')
    args = request.args.lists()
    print(args)

    return jsonify(args)


class SearchResult(object):

    def __init__(self, result):
        pass
        # self.url = result['url']
        # self.title_text = result['title']
        # self.title = highlight_all(result, 'title')
        # cls = import_string(result['type'])
        # self.kind = cls.search_document_kind
        # self.description = cls.describe_search_result(result)
    

class SearchResultPage(object):

    def __init__(self, results, page):
        # self.page = page
        # if results is None:
        #     self.results = []
        #     self.pages = 1
        #     self.total = 0
        # else:
        #     self.results = [SearchResult(r) for r in results]
        #     self.pages = results.pagecount
        #     self.total = results.total
        pass

    def __iter__(self):
        # return iter(self.results)
        pass


def reindex_database():
    pass

def udpate_database():
    pass

def search(query):
    pass
