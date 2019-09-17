import shortid from 'shortid';

export const setProduct = (p, type) => {
    let product = { ...p };
    product.id = shortid.generate();
    product.type = type;
    product.image = product.name.toLowerCase().replace(/\s/g, '')+'.jpg';

    if (type == 'pizza')  {
        product.isPremium =  product.isPremium === undefined ? true : product.isPremium;
        product.withTomatoSauce =  product.withTomatoSauce === undefined ? true : product.withTomatoSauce;
    }
    if (type == 'drink')  {
        product.hasOptions = false;
    } else {
        product.hasOptions =  product.hasOptions === undefined ? true : product.hasOptions;            
    }
    return product;
};

export const setProductOption = (o, type) => {
    let option = { ...o };
    option.id = shortid.generate();
    option.type = type;
    option.isPizzaOption = option.isPizzaOption === undefined ?  true : option.isPizzaOption;
    option.isSaladOption = option.isSaladOption === undefined ?  true : option.isSaladOption;
    option.factor = option.factor === undefined ? ((option.name.indexOf('*') === -1) ? 1 : 2) : option.factor ;
    return option;
}