import React, { PropTypes, Component } from 'react';
import NamespaceItem from './NamespaceItem';
import { List } from 'material-ui/List';
import AppContainer from '../../containers/AppContainer';

const listStyle = {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: 'calc(100% - 72px)',
    paddingTop: 0,
    margin: '8px 5px',
};

class NamespaceList extends Component {
    filterNamespaces(item) {
        const search = this.props.search || '';
        let nameEnd = search.indexOf('#');
        // Seperator not present, search entire word
        if (nameEnd < 0) {
            nameEnd = search.length;
        }
        const nameSearch = search.substring(0, nameEnd);
        return item.toLowerCase().includes(nameSearch);
    }

    filterKeys(item) {
        const search = this.props.search || '';
        const keyInd = search.indexOf('#') + 1;
        // match all keys if seperator is not defined
        if (keyInd <= 0) {
            return true;
        }
        const keySearch = search.substring(keyInd, search.length);
        return item.toLowerCase().includes(keySearch);
    }

    render() {
        const { items, search } = this.props;
        listStyle.backgroundColor = AppContainer.theme.palette.primary3Color;
        return (
            <List style={listStyle}>
                {Object.keys(items).sort().filter(item => this.filterNamespaces.bind(this)(item))
                 .map(item => (
                    <NamespaceItem namespace={ items[item] } key={ item } filter={ this.filterKeys.bind(this) } />
                 ))}
            </List>
        );
    }
}

NamespaceList.propTypes = {
    items: PropTypes.object,
    search: PropTypes.string,
};

export default NamespaceList;
