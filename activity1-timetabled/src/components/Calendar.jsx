import React from "react";
import Event from "./Event";

// Component arrow function
const Calendar = () => {
// At the end of the file, export the component by writing:
  return (
        <div className = 'Calendar'>
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 AM</td>
                        <Event eventName="Family Dinner" backgroundColor="greenBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">9 AM</td>
                        <Event eventName="Morning Run" backgroundColor="blueBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">10 AM</td>
                        <Event eventName="Team Meeting" backgroundColor="purpleBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">11 AM</td>
                        <td></td>
                        <Event eventName="Client Call" backgroundColor="redBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">12 PM</td>
                        <td></td>
                        <td></td>
                        <Event eventName="Lunch Break" backgroundColor="orangeBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">1 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Project Work" backgroundColor="blueBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">2 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Gym Session" backgroundColor="greenBackground"/>
                        <td></td>
                        <td></td>
                        </tr><tr>
                        <td className="time">3 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Doctor's Appointment" backgroundColor="redBackground"/>
                        <td></td>
                        </tr><tr>
                        <td className="time">4 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Grocery Shopping" backgroundColor="purpleBackground"/>
                        </tr><tr>
                        <td className="time">5 PM</td>
                        <Event eventName="Evening Class" backgroundColor="orangeBackground"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
// why do I need to write default??
export default Calendar;