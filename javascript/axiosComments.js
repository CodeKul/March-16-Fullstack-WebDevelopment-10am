

function getData() {
    let postId = document.getElementById("postId").value;
    let name = document.getElementById("fname").value;
    let mail = document.getElementById("mail").value;
    let comment = document.getElementById("comment").value;


    let comments ={
        postId: postId,
        name: name,
        email: mail,
        comment: comment
    };

    return comments;
}

function sendComment() {
    let commentData = getData();

    let p = axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        commentData,
        {headers: {"Content-type": "application/json"}}
    );

    console.log(response);

    p.then((response) =>{
        console.log(response.data);
    });
}


function getComments() {
    let result = axios.get("https://jsonplaceholder.typicode.com/comments", {
        headers: {"Content-type": "application/json"},
    });

   

    result.then(function (res) {
        let response = res.data;
        console.log(response);
        return response;
    })

    // console.log(result);


    .then(function (response) {
        let output = `<ul>`;
        response.map((item) => {
            output += `<li>${item.postId}</li>
                <li>${item.name}</li>
                    <li>${item.email}</li>
                        <li>${item.body}</li>`;
        });

        output += `</ul>`;
        document.getElementById("comments").innerHTML = output;
    })
}