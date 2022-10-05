import React, { useEffect } from "react";
import api from "../api/Api.js";
import { format } from "date-fns";
import { Table, Modal, Carousel } from "react-bootstrap";

export default function Launches() {
  const [launches, setLaunches] = React.useState([]);
  const [selectedLaunch, setSelectedLaunch] = React.useState(null);
  const [launchDetails, setLaunchDetails] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    api.get(`launches`).then((res) => {
      const launches = res.data;
      setLaunches(launches);
    });
  }, []);

  useEffect(() => {
    if (selectedLaunch) {
      api.get(`launches/${selectedLaunch}`).then((res) => {
        const launchDetails = res.data;
        setLaunchDetails(launchDetails);
        setShow(true);
      });
    }
  }, [selectedLaunch]);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" centered>
        {launchDetails && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                {launchDetails.links.mission_patch_small && (
                  <img
                    src={launchDetails.links.mission_patch_small}
                    alt="patch"
                    style={{ width: 50, marginRight: 10 }}
                  />
                )}
                {launchDetails.mission_name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {launchDetails.links.flickr_images && (
                <Carousel>
                  {launchDetails.links.flickr_images.map((image) => (
                    <Carousel.Item>
                      <img
                        src={image}
                        alt="Launch"
                        className="d-block h-100 mx-auto"
                        style={{ maxHeight: 350}}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
              <p>
                <strong>Flight number:</strong> {launchDetails.flight_number}
              </p>
              <p>
                <strong>Launch date: </strong>
                {format(new Date(launchDetails.launch_date_utc), "dd/MM/yyyy")}
              </p>
              <p>
                <strong>Launch site: </strong>
                {launchDetails.launch_site.site_name_long}
              </p>
              <p>
                <strong>Launch success: </strong>
                {launchDetails.launch_success ? "Yes" : "No"}
              </p>
              <p>
                <strong>Details: </strong>

                {launchDetails.details}
              </p>
            </Modal.Body>
          </>
        )}
      </Modal>
      <Table striped>
        <thead>
          <tr>
            <th colSpan={7}>LAUNCHES</th>
          </tr>
          <tr>
            <th rowSpan={2}>Flight number</th>
            <th rowSpan={2}>Mission name</th>
            <th rowSpan={2}>Launch Year</th>
            <th rowSpan={2}>Lauch Date</th>
            <th colSpan={3}>Rocket</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch, index) => (
            <tr
              key={launch.flight_number + index}
              onClick={() => {
                setSelectedLaunch(launch.flight_number);
              }}
            >
              <th>{launch.flight_number}</th>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_year}</td>
              <td>
                {format(
                  new Date(launch.launch_date_local),
                  "dd MMMM yyyy, HH:mm"
                )}
              </td>
              <td>{launch.rocket.rocket_id}</td>
              <td>{launch.rocket.rocket_name}</td>
              <td>{launch.rocket.rocket_type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
