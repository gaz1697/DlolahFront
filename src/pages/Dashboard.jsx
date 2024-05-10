import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import NewEventForm from "../components/newEventForm";
import AuthCard from "../components/AuthCard";
import { ref, set, get, child } from "firebase/database";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import OfficeHours from "../components/OfficeHours";
import { AuthContext } from "../context/authContext";

import { db } from "../firebase/firebase";

const Dashboard = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [eventsChanged, setEventsChanged] = useState(false);
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [isOfficeHoursModalOpen, setIsOfficeHoursModalOpen] = useState(false);
  const { currentUser, setCurrentUser, logout } = useContext(AuthContext);

  const dbRef = ref(db);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) {
        return;
      }
      setError(null);
      try {
        const snapshot = await get(
          child(dbRef, "users/" + currentUser.uid + "/events")
        );
        if (snapshot.exists()) {
          const eventsArray = Object.values(snapshot.val());
          setEvents(eventsArray);
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
    fetchData();
    return () => {
      // Cleanup function
    };
  }, [eventsChanged, isAuthLoading, currentUser]);

  const officeHours = [
    {
      id: 1,
      day: "sunday",
      startTime: "8:00 AM",
      endTime: "10:00 AM",
    },
    {
      id: 2,
      day: "sunday",
      startTime: "8:00 AM",
      endTime: "10:00 AM",
    },
  ];

  const popUpEventForm = () => {
    setIsNewEventModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsNewEventModalOpen(false); // Close the modal
  };

  function addNewEventHandler(newEventData) {
    setEventsChanged(!eventsChanged);
    set(
      ref(db, "users/" + currentUser.uid + "/events/" + newEventData.eventName),
      {
        eventName: newEventData.eventName,
        eventDesc: newEventData.eventDesc,
        eventDate: new Date(newEventData.eventDate).toLocaleDateString(),
        eventStart: newEventData.eventStart,
        eventEnd: newEventData.eventEnd,
      }
    );
    closeModal();
  }

  /* if (isAuthLoading || isLoading) {
    return <div>Loading...</div>;
  }*/

  return (
    <>
      {currentUser ? (
        <>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-center">
              Events Schedule
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {events.map((event) => (
                <div key={event.eventName} className="border p-4">
                  <h3 className="text-lg font-semibold">{event.eventName}</h3>
                  <p className="text-gray-500">{event.eventDesc}</p>
                  <p className="text-gray-500">
                    {event.eventDate} - {event.eventStart} - {event.eventEnd}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right m-2"
            onClick={() => setIsNewEventModalOpen(true)}
          >
            Add New Event
          </button>

          <Modal
            isOpen={isNewEventModalOpen}
            onRequestClose={() => setIsNewEventModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "transparent",
                border: "none",
                padding: "20px",
                width: "80%",
              },
            }}
          >
            <NewEventForm onAddNewEvent={addNewEventHandler} />
          </Modal>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right m-2"
            onClick={() => setIsOfficeHoursModalOpen(true)}
          >
            Open Office Hours
          </button>
          <Modal
            isOpen={isOfficeHoursModalOpen}
            onRequestClose={() => setIsOfficeHoursModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "transparent",
                border: "none",
                padding: "20px",
                width: "80%",
              },
            }}
          >
            <OfficeHours setModalState={setIsOfficeHoursModalOpen} />
          </Modal>
        </>
      ) : (
        <AuthCard />
      )}
    </>
  );
};

export default Dashboard;
Dashboard;
