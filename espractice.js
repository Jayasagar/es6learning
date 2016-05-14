const runTemplateStringExample = () => {
    const protocol = 'https';
    const host = 'localhost';
    const port = '8000';
    const path = 'login';
    
    const endPoint = '${protocol}://${host}:${port}/path';
    console.info('${endPoint}');
}

runTemplateStringExample();

const runDesructorExample = () => {
    
    const user = (firstName, lastName, age, accountNumber) => ({
      
        name : {
            'first': firstName,
            'last': lastName
        },
        age,
        accountNumber
    });
    
    console.info(user('first','last',12,12345));
    
    const alice = user('Sam', 'Mas', 13, 12345);
    
    //const {name: {first, last}, age, accountNumber} = alice;
    
    //console.info('Alice Fname is ' + first);
}

runDesructorExample();

const runSpreadExample = () => {
    
    const oneToFive = [1,2,3,4,5];
    const sixToTen = [6,7,8,9,10];
    
    const oneToTenSpread = [...oneToFive, ...sixToTen];
    
    console.info(oneToTenSpread);
};

runSpreadExample();