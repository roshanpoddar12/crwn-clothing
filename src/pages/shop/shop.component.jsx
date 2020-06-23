import React from 'react';
import shop_data from './shop_data'
import CollectionPreview from './../../components/collection-preview/collection-preview.component'

class Shop extends React.Component{
    constructor(){
        super();
        this.state = {
            collections : shop_data
        }    
    }
    render(){
        const { collections } = this.state;
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        // eslint-disable-next-line no-unused-expressions
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default Shop;