<!DOCTYPE html>
<html>
  <head>
    <title>UUIDジェネレーター</title>
  </head>
  <body>
    <button id="createUuid">Create UUID</button>
    <p>UUID:<span id="uuid"></span></p>
    <script>
      const button = document.getElementById("createUuid");
      const output = document.getElementById("uuid");
      button.addEventListener("click", () => {
        fetch("https://httpbin.org/uuid")
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Error (${response.status})`);
            }
          })
          .then(data => {
            output.style.color = "green";
            output.textContent = data.uuid;
          })
          .catch(error => {
            output.style.color = "red";
            output.textContent = error.message;
          });
      });
    </script>
  </body>
</html>