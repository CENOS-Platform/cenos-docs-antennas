---
id: release-notes
title: Release notes
sidebar_label: v3.x
---

## v3.2.1 (May 30th, 2024)

Bugfixes:

* Fixed error with licenses that blocked functionality of separate features in the software


## v3.2.0 (May 29th, 2024)

Features:

* Added peak directivity and gain at each frequency to CSV export and Custom Plots
 
Improvements:

* Unassigned geometry volumes in Geometry section are now highlighted during role selection when all mandatory parts have been assigned
* Improved accuracy of multiport coaxial port simulations using sequential excitation
* Improved reliability of PDF report generation
* Added CAD import quality check that highlights places in the imported model with small gaps that may cause automatic mesh failure
* General stability improvements

Bugfixes:

* Fixed PDF reports not showing the correct value of total mesh elements
* Cases made prior to RF v2.5 now show the correct default value of corner mesh refinement modifier
* Removed misleading message in PDF reports about unsaved changes in sequential excitation multiport cases
* Current Density scale is now shown in cases where only conductive parts are used whereas previously it was missing
* Fixed topology change notification appearing in cases where no topology change was introduced when sending the updated geometry from FreeCAD
* Internet connection disruption during calculation no longer causes CENOS to stop calculation
* Fixed Geometry section being available in the top bar before sending geometry from the Geometry Editor leading to empty user interface
* It is now possible to stop mesh troubleshooting



## v3.1.0 (April 11th, 2024)

Features:

* Added Streamline and Vector visualization to Python Plots
* Implemented variable power input to the Discrete Port and Coaxial Port
  * Simultaneous excitation has a single input that affects all ports while in Sequential excitation cases each port has its own power input window
* Added ability to define Port Capacitance instead of reactance to the Discrete Port to allow frequency dependent complex part of port impedance
  * This allows to define RFID chip resistance and capacitance without the need of a separate lumped element
 
Improvements:

* CENOS now supports FreeCAD v0.21.2
  * To use newer versions of FreeCAD, the user needs to manually download the installer for FreeCAD and specify the path in Settings to the new installer. CENOS needs to be restarted for changes to take into effect

Bugfixes:

* Current Density now appears in the Result Field dropdown in its own Python Plot tab
* Fixed negative dielectric losses appearing in cases with a defined port reactance
* Fixed radiated power being larger than the previous default input power (1 W) in cases with a defined port reactance


## v3.0.0 (March 5th, 2024)

Features:

* Updated Python Plots to include more results
   * Added Electric and Magnetic Field visualization
   * Added Surface Current Density visualization when using real conductors
   * Added Radiation Pattern Custom Cuts, allowing to visualize specific cuts of the 3D pattern
* Added ability to calculate multiple frequencies in parallel
   * This function is currently directly controlled by the user in Simulation Control in Physics
* Added new computational algorithm for more accurate simulations, utilizing higher order elements
   * This can be controlled in Simulation Control in Physics

Improvements:

* Updated Python Plot UI
* Added new icons to distinguish Python Plots and ParaView
   * Python Plots are now opened with the rightmost icon under the Visualization block, using the Eye symbol
   * ParaView can still be opened using the second icon from the right under the Visualization block, using the ParaView three stripe logo
* Modifying Geometry Variables in Simulation Control no longer resets the units in FreeCAD CENOS Parameters spreadsheet
* Added ability to save a screenshot of 3D results directly from Python Plots

Bugfixes:

* Fixed incorrect Directivity and Gain results in multiple port Simultaneous Excitation cases
* Fixed the simulation STOP button being missing in Parametric Study cases
* Fixed CAD replacement process in the From CAD workflow
* Fixed Curvature Safety and Surface Gradient not working in Advanced Meshing Parameters
* Fixed an issue where the coaxial port would produce "Null determinant" error when placed on the Z axis
* Fixed Single Port cases not generating Extra Results and PDF report when the user had defined Simultaneous Excitation
   * Existing cases will generate the PDF report, but Extra Results generation will require a recalculation of the case
* Fixed issue where results would not open for cases using Custom application type and a Conductor role
* Replaced missing roles in all application types
