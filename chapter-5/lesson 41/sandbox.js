const blogs=[
    {title: 'why mac and cheese rules',likes:'30'},
    {title: '10 things to make with marmite',likes:'70'}
]



let user = {
    name:'crystal',
    age:30,
    email: 'crystal@thenetninja.co.uk',
    location:'berlin',
    blogs:[
        {title: 'why mac and cheese rules',likes:'30'},
    {title: '10 things to make with marmite',likes:'70'}
    ],

    login(){
        console.log('user logged in');
    },
    logout(){
        console.log('user logged out');
    },
    logBlogs(){
        // console.log(this.blogs );
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
          })
        }
};

user.logBlogs();
console.log(blogs);


