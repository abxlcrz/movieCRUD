class Movie{

    constructor(name,rate,year,description){
        this.name=name;
        this.rate=rate;
        this.year=year;
        this.description=description;
    }

}

class UI{
    
    setMovie(movie){
        let movieList=document.getElementById('movie-list');
        let element=document.createElement('div');
        element.innerHTML=`
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Movie</strong>: ${movie.name}
                    <strong>Rate</strong>: ${movie.rate}
                    <strong>Year</strong>: ${movie.year}
                    <strong>Description</strong>: ${movie.description}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div> 
        
        `;
        movieList.appendChild(element);
        this.cleanForm();
    }

    deleteMovie(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('movie deleted','danger');
        }
    }
    cleanForm(){
        document.getElementById('movie-form').reset();
    }

    showMessage(messageText,messageColor){
        const div=document.createElement('div');
        div.className=`alert alert-${messageColor} mt-4`;
        div.appendChild(document.createTextNode(messageText));
        //show the message in the DOM
        const container=document.querySelector('.container');
        const app=document.querySelector('#app');
        container.insertBefore(div,app);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        }, 2000)
    }
}

document.getElementById('movie-form')
    .addEventListener('submit',(e)=>{
        const name=document.getElementById('name').value;
        const rate=document.getElementById('rate').value;
        const year=document.getElementById('year').value;
        const description=document.getElementById('description').value;
        console.log(name);
        console.log(rate);
        console.log(year);
        console.log(description);
        const movie=new Movie(name,rate,year,description);
        console.log(movie)
        const ui= new UI();
        ui.setMovie(movie);
        ui.showMessage('movie added','success');
        e.preventDefault();
});

document.getElementById('movie-list')
    .addEventListener('click',(e)=>{
        const ui=new UI();
        ui.deleteMovie(e.target);

});