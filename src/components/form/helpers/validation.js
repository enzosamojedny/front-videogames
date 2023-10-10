function validation(error) {
  const errors = {};
  const nameRegex = /^[a-zA-Z\s]+$/;
  const strictUrlRegex = /^(http|https):\/\/[^ "]+$/;
  const descriptionRegex = /^[a-zA-Z0-9\s.,!?()' -]*$/;
  const ratingRegex = /^[0-9.]+$/;
  if (!error.name || error.name.length < 4) {
    errors.name = "Must have at least 4 characters";
  } else if (error.name.length > 15) {
    errors.name = "Must have less than 15 characters long";
  } else if (!nameRegex.test(error.name)) {
    errors.name = "Name cannot contain numbers or special characters";
  }
  if (!error.background_image) {
    errors.background_image = "Please enter valid URL";
  } else if (!strictUrlRegex.test(error.background_image)) {
    errors.background_image = "Invalid URL";
  }
  if (!error.description || error.description.length < 10)
    errors.description = "Description must have at least 10 characters";
  else if (!descriptionRegex.test(error.description)) {
    errors.description = "Description must not include special characters";
  }
  if (!error.released) {
    errors.released = "Please choose a date";
  }
  if (!error.rating) {
    errors.rating = "Rating must not be empty";
  } else if (!ratingRegex.test(error.rating)) {
    errors.rating = "Must only contain numbers and dots ";
  }
  if (!error.platforms) {
    errors.platforms = "Select at least 1 platform ";
  }
  return errors;
}

export default validation;
