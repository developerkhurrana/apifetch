const postListCont = document.querySelector(".postListContainer");

//Fetch using XML HTTP Req

// function fetchUsingXHR() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhr.responseType = "json";
//   xhr.send();

//   xhr.
//     onload = () => {
//       if (xhr.status === 200) {
//         displayResults(xhr.response);
//       } else {
//         console.log("Some error occured");
//       }
//     });
// }

// function fetchUsingFetch() {
//   const fetchReq = fetch("https:jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });

//   fetchReq
//     .then((response) => response.json())
//     .then((result) => displayResults(result))
//     .catch((e) => console.log(e));
// }

//Fetch using async await

// async function fetchUsingAsync() {
//   const res = await fetch("https:jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });

//   const result = await res.json();

//   displayResults(result)
// }
function helperMethod(method, url) {
  const prom = new Promise((res, rej) => {
    const xgr = new XMLHttpRequest();
    xgr.open(method, url);
    xgr.responseType = "json";
    xgr.send();

    xgr.onload = () => {
      if (xgr.status === 200) {
        res(xgr.response);
      } else {
        rej(xgr.response);
      }
    };
  });

  return prom;
}

async function fetchUsingXHRAsync() {
  const res = await helperMethod(
    "GET",
    "https:jsonplaceholder.typicode.com/posts"
  );
  displayResults(res);
}

function displayResults(posts) {
  postListCont.innerHTML = posts.map((postItem) => `
    <div class='postitem'>
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join(" ");
}

// fetchUsingXHR();
// fetchUsingFetch()
// fetchUsingAsync()
fetchUsingXHRAsync();
