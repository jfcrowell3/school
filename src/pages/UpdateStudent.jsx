// import React from 'react';
// import { useForm } from 'react-hook-form';

// const UpdateStudent = ({ handleUpdate, studentList }) => {
//   const { register, handleSubmit } = useForm();

//   return (
//     <form
//       onSubmit={handleSubmit((firstName, lastName, age, grade) => {
//         handleUpdate(firstName, lastName, age, grade);
//         alert('Student Updated!');
//       })}
//     >
//       <h1>Update Student</h1>
//       <label>First Name</label>
//       <input {...register('firstName')} type="text" />
//       <label>Last Name</label>
//       <input {...register('lastName')} type="text" />
//       <label>Age</label>
//       <input {...register('age')} type="text" />
//       <label>Grade</label>
//       <input {...register('grade')} type="text" />
//       <input type="submit" className="submitButton" />
//     </form>
//   );
// };

// export default UpdateStudent;
