import { Dialog, Notify } from 'quasar'
import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import langKo from 'quasar/lang/ko-KR'

export default {
    config: {},
    lang: langKo,
    plugins: {
        Dialog, Notify,
    },
}