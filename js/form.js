const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // You may adjust this based on your server response
    })
    .then((data) => {
      console.log("Form successfully submitted:", data);
      // You can add additional success handling here
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    });
};

document.querySelector("form").addEventListener("submit", handleSubmit);
