let user = {
    name:'crystal',
    age:30,
    email: 'crystal@thenetninja.co.uk',
    location:'berlin',
    blogs:['why mac and cheese rules','10 things to make with marmite'],

    login:() => {
        console.log('user logged in');
    },
    logout:() => {
        console.log('user logged out');
    },
    logBlocks:  ()=>{
        
    }
}

user.login();

const a='mario';
a.toUpperCase();