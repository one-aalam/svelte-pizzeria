import shortid from 'shortid';

const seedId = 0;
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