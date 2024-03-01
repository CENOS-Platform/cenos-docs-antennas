---
id: release-notes
title: Release notes
sidebar_label: v3.x
---

## v3.0.0 (March 1st, 2024)

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
