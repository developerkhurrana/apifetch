const postListCont = document.querySelector(".postListContainer");

//Fetch using XML HTTP Req

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr,
    (onload = () => {
      if (xhr.status === 200) {
        displayResults(xhr.response);
      } else {
        console.log("Some error occured");
      }
    });
}

function displayResults(posts) {
  postListCont.innerHTML = posts
    .map(
      (postItem) => `
    <div class='postitem'>
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join(" ");
}

fetchUsingXHR();
