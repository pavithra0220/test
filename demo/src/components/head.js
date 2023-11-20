// import React from "react"
// function Head(){
//     return(
//         <>
//         <div className="head">Web content refers to the textual, aural, or visual content published on a website.</div>
//         </>
//     )
// }

// export default Head

<ul>
{student1.map((stu) => (
  <li key={stu.id}>
    {stu.id === editId ? (
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) =>
            this.setState((prevState) => ({
              editId: {
                ...prevState.editId,
                newName: e.target.value,
              },
            }))
          }
        />
        <button onClick={this.editData}>Save</button>
      </div>
    ) : (
      <div>

        <button onClick={() => this.Efn(stu.id, stu)}>Edit</button>
      </div>
    )}
  </li>
))}
</ul>