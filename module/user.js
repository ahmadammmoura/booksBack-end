const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:${process.env.DATABASE_URL}/books`, {useNewUrlParser: true, useUnifiedTopology: true});


const books = new mongoose.Schema({
    name: String,
    description: String,
    status : String
  });
  
  const user = new mongoose.Schema({
    Email: String,
    books: [books]
  });
  
  
  const UserModel = mongoose.model('user', user);
  const BooksModel = mongoose.model('books', books);


function adduser(){
    const ahmad = new UserModel({
        Email: 'ammoura575@gmail.com',
        books: [
            {
                name: 'sofie world',
                description: `Sophie's World (Norwegian: Sofies verden) is a 1991 novel by Norwegian writer Jostein Gaarder. It follows Sophie Amundsen, a Norwegian teenager who is introduced to the history of philosophy by Alberto Knox, a middle-aged philosopher`,
                status : 'published'
            },
            {
                name: 'Children of Gebelawi',
                description: `Children of Gebelawi is a novel by the Egyptian writer and Nobel laureate Naguib Mahfouz. It is also known by its Egyptian dialectal transliteration, Awlad Haretna, and by the alternative translated transliteral Arabic title of Children of Our Alley.`,
                status : 'published'
            }
        ]
    });
    const abeer = new UserModel({
        Email: 'dr.odour@yahoo.com',
        books: [
            {
                name: '1984',
                author: 'George Orwell',
                description: 'is a dystopian social science fiction novel',
            },
        ]
    });


    ahmad.save();
    abeer.save();
}

function getAllUsers(req,res){

    const {Email}=req.query
    

    UserModel.find({ Email:Email }, function (err, users) {
        if (err) return console.error(err);
        res.send(users)
    });
}


function addNewBook(req,res){

    const {userEmail,BookName,Bookstatus,BookDescription} = req.body;

    UserModel.find({ Email:userEmail }, function (err, user) {
        if (err) return console.error(err);
        const newBook ={
            name : BookName,
            description: BookDescription,
            status : Bookstatus
        };

        user[0].books.push(newBook);
        user[0].save();
        res.send(user[0])
    });
}

function deleteBooks(req, res) {
    const index = Number(req.params.index);
    const { email } = req.query;
    UserModel.find({ Email: email }, (err, userBooks) => {


        console.log(index)

        const newBookArry = userBooks[0].books.filter((book, i) => {
            return i !== index
        });
        userBooks[0].books = newBookArry;
        userBooks[0].save();


        res.send('hellooooooooooo')
    });

    
}






module.exports = {
    adduser: adduser,
    getAllUsers: getAllUsers,
    addNewBook:addNewBook,
    deleteBooks:deleteBooks
};