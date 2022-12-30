import Directory from "./components/directory/directory.component";

function App() {

  const categories =[
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl":"https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": " https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ];
  

  return (
    <div className="App">
    
    <Directory categories={categories}/>
    </div>
  );
}

export default App;
