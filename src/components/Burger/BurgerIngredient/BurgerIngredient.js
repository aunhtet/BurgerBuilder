import React, { Component} from 'react';
import styleClass from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;
        switch(this.props.type){
            case ('bread-bottom'):
                ingredient = <div className={styleClass.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styleClass.BreadTop}>
                        <div className={styleClass.Seeds1}></div>
                        <div className={styleClass.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={styleClass.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styleClass.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={styleClass.Bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={styleClass.Salad}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;