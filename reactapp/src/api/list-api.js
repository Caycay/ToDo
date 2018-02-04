class ListApi{
    static lists(){
        return fetch('localhost:62848/api/list/').then(response =>{
            return response.json();
        }).catch(error =>{
           return error;
        });
    }

    static getAllLists(){
        const request = new Request(`http://localhost:62848/api/list/`, {
            method: 'GET',
        });
        return fetch(request).then(response =>{
           return response.json();
        }).catch(err => {return err});
    }

}

export default  ListApi;