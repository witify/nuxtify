import Axios from 'axios'

export default {
    query(language = 'en', type, element = undefined) {
        let PROJECT_ID = 'f028cdf3-3966-003a-0e67-c6b47908a403'
        let query = 'https://deliver.kenticocloud.com/' + PROJECT_ID
        if (element) {
            query += '/items/' + element
            query += '?language=' + language
        } else {
            query += '/items?system.type=' + type
            query += '&language=' + language
        }

        return query
    },
    send(language = 'en', type, element = undefined) {
        return Axios.get(this.query(language, type, element))
    }
}
