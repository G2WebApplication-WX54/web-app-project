<template>
  <div class="container-fluid px-0">
    <div class="page-container">
      <div class="profile-bg">
        <div class="profile-info">
          <h1>Edit Profile</h1>
          <img src="../assets/Citizen.png" alt="Citizen" class="profile-image">
        </div>
        <div class="form-container">
          <form class="form-flex">
            <div class="column">
              <div class="form-group">
                <label for="names" class="label-black">First Names:</label>
                <input type="text" id="names" name="names" required class="border-black" placeholder="First names">
              </div>
              <div class="form-group">
                <label for="last-names" class="label-black">Last Names:</label>
                <input type="text" id="last-names" name="last-names" required class="border-black" placeholder="Last names">
              </div>
              <div class="form-group">
                <label for="district" class="label-black">District:</label>
                <input type="text" id="district" name="district" required class="border-black" placeholder="District">
              </div>
              <div class="form-group">
                <label for="emails" class="label-black">Email:</label>
                <input type="email" id="emails" name="emails" required class="border-black" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="route-type" class="label-black">Route Type:</label>
                <select id="route-type" name="route-type" required class="border-black">
                  <option value="safe">Safe</option>
                  <option value="fast">Fast</option>
                </select>
              </div>
              <div class="form-group">
                <label for="notification" class="label-black">Alert Frequency:</label>
                <select id="notification" name="notification" required class="border-black">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div class="column">
              <div class="form-group">
                <label for="location" class="label-black">Location (Optional):</label>
                <input type="text" id="location" name="location" class="border-black" placeholder="Location">
              </div>
              <div class="form-group">
                <label for="description" class="label-black">Description:</label>
                <textarea id="description" name="description" required class="border-black" rows="5" placeholder="Description"></textarea>
              </div>
              <button type="submit">Confirm Changes</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background-color: #01A1FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%; /* Adjust to occupy the entire screen width */
  color: white;
  padding: 1px 100px;  /* Initial padding for large screens */
  position: fixed;
  left: 0;
}
#description {
  height: 400px; /* Set a fixed height */
  width: 300px; /* Set a fixed width */
  resize: none; /* Prevent the user from changing the size */
}
.form-flex {
  display: flex;
}
.column {
  flex: 1;
}
.column:not(:last-child) {
  margin-right: 80px; /* Add margin to the right of each column except the last one */
}
.column:not(:first-child) {
  margin-left: 80px; /* Add margin to the left of each column except the first one */
}
.label-black {
  color: black;
  text-align: left;
  font-weight: bold;
  font-size: 24px;  /* Increase font size as needed */
}
.form-group {
  margin-bottom: 20px; /* Add bottom margin to the form groups */
}
.border-black {
  border: 1px solid black; /* Set the border to black */
  border-radius: 0; /* Remove rounded border */
}
.profile-bg {
  background-color: #6DC9FF;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width:87%
}
.profile-info {
  flex: 1; /* Take the remaining space */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  margin-left: 20px; /* Adjust margin to move content to the left */
}
.form-container {
  flex: 1;
  padding: 40px;
}
.profile-image {
  width: 500px; /* Adjust the width of the image */
  height: auto; /* Maintain aspect ratio */
  margin-top: 20px;
}
h1 {
  color: white;
  font-size: 40px;
}
.form-group {
  margin-bottom: 20px;
  flex: 1;
}
label {
  display: block;
  font-weight: bold;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 24px;  /* Increase font size as needed */
}
button {
  padding: 10px 20px;
  background-color: yellow;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #9EA016;
}
.container-fluid {
  padding-right: 0;
  padding-left: 0;
  margin-right:auto;
  margin-left:auto;
}

</style>
