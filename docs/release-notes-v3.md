---
id: release-notes-v3
title: Release notes
sidebar_label: v3.x
---

## v3.4.1 (July 29th, 2024)

Bugfixes:

* Results in cases that had parametric studies run in previous versions can now be opened 


## v3.4.0 (July 23rd, 2024)

Features:

* Included Smith Charts in the built-in results section under the Charts tab

Improvements:

* The Charts tab of Python Plots have a new and improved design

Bugfixes:

* The Smith Chart in the extra_results folder has been removed in favor of the Smith Chart in Python Plots
* Faces with applied Conductor roles have their edges refined again if there is a face with a Patch role applied in close proximity


## v3.3.1 (July 2nd, 2024)

Bugfixes:

* Mesh refinements no longer get reset if the user changes a physics parameter
* Fix opening of cases made prior and including v2.1.1 where the message "Preprocessor key 'geomRoles' not recognized" appeared
* Fixed case opening made prior to RF v2.1.1 due to missing mesh data


## v3.3.0 (June 18th, 2024)

Features:

* Added Custom Air Domain padding definition in the Physics section
  * It is now possible to define the padding from the model in all XYZ directions
  * It is now possible to define a custom frequency at which the necessary padding is added

Improvements:

* User now needs to check mesh if physics parameters have changed and has used manual mesh refinements. Otherwise, automatic mesh will be regenerated on pressing RUN

Bugfixes:

* Fixed issue where CAD reloading would not delete missing solids from selected roles
* Fixed issue in some cases where a bad automatic mesh caused simulations to fail after calculation (float division by zero)
* Fixed issue in some cases that caused the Python Plots to not open and the PDF report to not generate
* ParaView now works in Template cases
* Fixed changing role definitions from face to solid not bringing the user back to the main role screen
* Fixed calculation time increase in some cases introduced in RF v3.2
* Parametric studies now work with new versions of FreeCAD
* Removed the apostrophe that appears before the name of the variables in Geometry Variables
* Fixed incorrect power unit scale in Python Plots
* Rescaling to custom data range in Python Plots now shows the current scale minimum and maximum values for all result fields
* There is now a grid line for 0 in Python Plot charts
* Mesh slicing visualization now updates when the mesh is regenerated


## v3.2.1 (May 30th, 2024)

Bugfixes:

* Fixed license-related issue that blocked calculation in specific cases


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
