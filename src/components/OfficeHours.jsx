import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { ref, set, get, child } from "firebase/database";

const OfficeHours = (props) => {
  const [officeHours, setOfficeHours] = useState([
    { day: "Monday", startTime: "", endTime: "", checked: false },
    { day: "Tuesday", startTime: "", endTime: "", checked: false },
    { day: "Wednesday", startTime: "", endTime: "", checked: false },
    { day: "Thursday", startTime: "", endTime: "", checked: false },
    { day: "Friday", startTime: "", endTime: "", checked: false },
    { day: "Saturday", startTime: "", endTime: "", checked: false },
    { day: "Sunday", startTime: "", endTime: "", checked: false },
  ]);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dbRef = ref(db);

  useEffect(() => {
    console.log("currentUser", props.currentUser);
    fetchOfficeHours();
  }, []);

  // Function to fetch office hours from the database
  const fetchOfficeHours = async () => {
    setError(null);
    try {
      console.log("currentUser", props.currentUser.uid);
      const snapshot = await get(
        child(dbRef, "users/" + props.currentUser.uid + "/officeHours/")
      );
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setOfficeHours(data[0]);
        console.log(data[0]);
        console.log("office hours", data);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      setError(error);
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOfficeHours = () => {
    set(ref(db, "users/" + props.currentUser.uid + "/officeHours/"), {
      officeHours,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateOfficeHours();
    props.setModalState(false);
    // Handle form submission logic here
  };

  const handleCheckboxChange = (event) => {
    const day = event.target.name;
    const newCheckedState = event.target.checked;
    const updatedOfficeHours = officeHours.map((d) =>
      d.day.toLowerCase() === day ? { ...d, checked: newCheckedState } : d
    );

    setOfficeHours(updatedOfficeHours);
  };
  const handleTimeChange = (event) => {
    const day = event.target.name;
    const timeType = event.target.id.includes("StartTime")
      ? "startTime"
      : "endTime";
    const value = event.target.value;
    console.log(day, timeType, value);
    const updatedOfficeHours = officeHours.map((d) =>
      d.day.toLowerCase() === day ? { ...d, [timeType]: value } : d
    );

    setOfficeHours(updatedOfficeHours);
  };

  return (
    <div>
      <form
        className="mx-auto mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md flex flex-col items-start"
        onSubmit={handleSubmit}
      >
        {officeHours.map((d) => (
          <div key={d.day} className="flex items-center mb-4">
            <input
              type="checkbox"
              id={d.day.toLowerCase()}
              name={d.day.toLowerCase()}
              className="mr-2 text-blue-500"
              onChange={handleCheckboxChange}
              checked={d.checked}
            />
            <label
              htmlFor={d.day.toLowerCase()}
              className="mr-4 text-sm font-bold text-gray-700 w-20"
            >
              {d.day}
            </label>
            <input
              type="time"
              id={`${d.day.toLowerCase()}StartTime`}
              name={`${d.day.toLowerCase()}`}
              className="border border-gray-300 p-2 mr-4 rounded"
              disabled={!d.checked}
              onChange={handleTimeChange}
              value={d.startTime}
            />
            <input
              type="time"
              id={`${d.day.toLowerCase()}EndTime`}
              name={`${d.day.toLowerCase()}`}
              className="border border-gray-300 p-2 rounded"
              disabled={!d.checked}
              onChange={handleTimeChange}
              value={d.endTime}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded self-end mt-4">
          Update Office Hours
        </button>
      </form>
    </div>
  );
};

export default OfficeHours;
