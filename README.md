# RemoteSensing# Remote Sensing Project

This project aims to provide a comprehensive platform for monitoring and analyzing various environmental factors using remote sensing techniques. The project includes features like vessel tracking, satellite imagery analysis, and carbon sink estimation. We utilized Google Cloud Platform for satellite imagery, numpy and pandas for data cleaning, and HTML, JavaScript, and CSS for the web application.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Features

- **Vessel Tracking:** Monitor the location and movement of vessels in different regions.

- **Satellite Imagery Analysis:** Access and analyze satellite images for environmental monitoring.

- **Carbon Sink Estimation:** Estimate the carbon sink capacity of various regions.

- **Filter Vessels:** Select specific vessels from a dropdown menu and apply filters.

- **Toggle Layers:** Switch between different layers like Satellite Imagery, Vessel Tracking, and Carbon Sink Estimation.

- **Location Selection:** Choose different regions such as the Caribbean, Mediterranean, and South China Sea.

- **CSV File Handling:** Upload and save CSV files.

- **Animation Controls:** Adjust the animation speed and view the current time.

## Usage

1. **GCP API Key:**

   - In line 297 of the HTML file, input your own Google Cloud Platform (GCP) API key to enable the satellite imagery features.

2. **Upload CSV File:**

   - Click "Upload CSV File" to upload a CSV file.

3. **Filters:**

   - Select or search a vessel from the dropdown menu and click "Apply Vessel Filter" to filter the displayed data.

4. **Layers:**

   - Toggle different layers (Satellite Imagery, Vessel Tracking, Carbon Sink Estimation) using the buttons in the sidebar.

5. **Locations:**

   - Switch between different regions (Caribbean, Mediterranean, South China Sea) using the location buttons.

6. **Animation Controls:**

   - Adjust the speed of animations using the speed slider.
   - View the current time in the animation using the "Current Time" field.

7. **Interactive Ship Info:**

   - Click on a ship to view detailed information about the vessel.

8. **Download Ship Report:**

   - Click "Save to CSV" to save the current data to a CSV file.

## License

This project is licensed under the MIT License.
