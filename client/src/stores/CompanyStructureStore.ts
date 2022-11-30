import { action, makeObservable, observable } from 'mobx';
import axios from 'axios';
import { CompanyStructureNode } from '../../../server/types'


export default class CompanyStructureStore {
    nodes: CompanyStructureNode[] = [];

    childNodes: CompanyStructureNode[] = [];

    getNodes = () => {
        const data = axios.get('/api/company-structure').then((data) => this.nodes = data.data);
        console.log(data);
    };

    getChildNodes = (nodeId: number) => {
        axios.get(`/api/company-structure/${nodeId}`).then((response) => this.childNodes = response.data)
    };

    constructor() {
        makeObservable(this, {
            nodes: observable,
            childNodes: observable,
            getNodes: action,
            getChildNodes: action
        })
    }
}