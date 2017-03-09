function DbDataService($http, $rootScope, URL, EVENTS) {
    function _on_page_id_received() {
        $rootScope.$broadcast(EVENTS.PAGE_ID_RECEIVED);
    }

    function _on_post_data_received() {
        $rootScope.$broadcast(EVENTS.POST_DATA_RECEIVED);
    }

    function _on_page_modified() {
        $rootScope.$broadcast(EVENTS.PAGE_MODIFIED);
    }

    function _update_post_data(newData) {
        postData = newData;
    }

    function _update_page_ids(newData) {
        pageIds = newData;
    }

    function _update_page_infos(newData) {
        pageInfos = newData;
    }

    function _on_error(response) {
        if (response.status > 0) {
            console.error(response);
        }
    }

    let pageIds = null;
    let pageInfos = null;
    let postData = null;

    this.getPostData = function() {
        return postData;
    };

    this.getPageIds = function() {
        return pageIds;
    }

    this.getPageInfos = function() {
        return pageInfos;
    }

    // db related
    this.retrievePageIds = function() {
        return $http.get(URL.DB_READ).then(
            function success(response) {
                _update_page_ids(response.data);
                _on_page_id_received();
            },
            function error(response) {
                _on_error(response);
            }
        )
    }

    this.retrievePostByPageId = function(pageId) {
        return $http.get(URL.DB_READ + pageId).then(
            function success(response) {
                _update_post_data(response.data);
                _on_post_data_received();
            },
            function error(response) {
                _on_error(response);
            }
        );
    }

    this.crawlAllPages = function(token) {
        // send token
        let data = {
            token: token
        };

        return $http.post(URL.CRAWL, data).then(
            function success(response) {
                console.log(response.data);
                _on_page_modified();
            },
            function error(response) {
                _on_error(response);
            });
    };

    this.crawlFacebookPage = function(token, pageId) {
        // send token
        let data = {
            page_id: pageId,
            token: token
        };

        return $http.post(URL.CRAWL, data).then(
            function success(response) {
                console.log(response.data);
                _on_page_modified();
            },
            function error(response) {
                _on_error(response);
            });
    };

    this.deleteAllData = function() {
        return $http.get(URL.DB_DELETE).then(
            function success(response) {
                _on_page_modified();
            },
            function error(response) {
                _on_error(response);
            });
    };

    this.deleteFacebookPageData = function(page_id) {
        return $http.get(URL.DB_DELETE).then(
            function success(response) {
                _on_page_modified();
            },
            function error(response) {
                _on_error(response);
            });
    };

}

export default ['$http', '$rootScope', 'URL', 'EVENTS', DbDataService]