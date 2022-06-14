---
id: release-notes-v1
title: Release notes v1.x 
sidebar_label: v1.x
---

## v1.2.4 (April 1, 2021)

* Updates to support chat.

## v1.2.3 (March 31, 2021)

* Fixed S11 > 0 bug.
* Fixed unstoppable parametric sweep.
* Fixed license check crash.
* Fixed template case saving issue (temporary cases).
* Fixed disappearing From CAD geometry (which failed to simulate).
* Fixed boundary side highlight (preview section).
* Fixed parametric sweep when using an imported mesh.
* Fixed rotated PDF results.
* Fixed ParaView lacking results/error display.
* Fixed E-field display bug.
* Fixed invisibility of sketched faces.
* Fixed radiation pattern plots' normalization.
* Mesh element count fix.
* Mesh edge orientation fix.
* Resolved radiated power calculation (from accepted power and dielectric losses).

## v1.2.2 (March 11, 2021)

* Polar plots' scaling is now normalized.
* Resolved consistency in the symbol of object merging.
* Resolved phase shift issue that introduced errors in physics computations.
* Improved the robustness of the role assignment procedure.
* Fixed 3D farfield bug that disappeared upon the introduction of ParaView filters.
* Fixed |S11| > 0 dB caused by phase-related issues.
* Phase shift value is now stored and isn't lost when going back to a previous value-definition stage.

## v1.2.1 (December 21, 2021)

* Coaxial port now works similar to uniform port.
* Fixed "Create automatic mesh now" workflow.
* License key can now be changed.

## v1.2.0 (November 25, 2021)

* Multi-port S-Parameters, enabling engineers to simulate antenna arrays and other networks (such as filters) like never before;
* Parametric Workbench, accelerating the process of trial and error in terms of geometric adjustments, by running all the desired configurations in one go automatically;
* Three new antenna templates added:
    - Triangular Microstrip Antenna
    - Circular Microstrip Antenna
    - Yagi-Uda Wire Antenna

## v1.1.5 (August 23, 2021)

* Warning message if user opens newer case in the older CENOS version.
* Fix: Correct calculations when coaxial port is selected.
* Frequency start and end values should be positive integers.
* Fix: Microsoft VC++ redistributable install restarted PC without asking.

## v1.1.4 (July 13, 2021)

* Improved support chat.
* Recent material badges are now pinnable. 
* Role parameters are kept/updated, if geometry is sent from pre-processor again. 
* License key now can be changed.
* Cases now can be stored in path with 'space' in file path.
* Improved import of STEP files. 
* Fixed hanging of FreeCAD during meshing. 
* Role type can now be changed.
* Can rename faces in Geometry interface.

## v1.1.3 (June 2, 2021)

* Fixed version check of 3rd party components.

## v1.1.2 (May 19, 2021)

* Fixed freeze while meshing in FreeCAD.

## v1.1.1 (May 14, 2021)

* All PRO plan functionality is enabled for Trial plan as well.
* App notifies if VC++ redistributables are missing and there is no access to Windows registry settings.
* Ipt import now works with non-English locale.
* Panel mount SMA connector is added to component library.
* Bug where play button re-imports file is fixed.
* Component library descriptions now display correctly formatted markdown.

## v1.1.0 (April 20, 2021)

* Multiple processor cores will be used in simulation. Custom settings added to select threads and processor architecture.  (Professional subscription)
* Direct support chat built into application. (Professional subscription)
* PCB flattening tool added to FreeCAD.
* KiCAD integration into FreeCAD.
* Fixed display of multi-frequency simulation in PDF results.
* FreeCAD component library updated.
* Terms & Conditions updated removing some restrictions (Section 6). Now, no issue to use the software for design of such things as medical equipment, e-cigaretes and military/governmental projects.



## v1.0.2 (April 6, 2021)

* ParaView updated to version 5.9, which solves crashing issues. 
* First time hints can be reenabled in settings. 
* Meshing is not blocking UI in FreeCAD.
* Meshing improvements in FreeCAD.
* STL files are explicitly not supported as CAD input. 
* Added "Extract face/edge" tool in FreeCAD.

## v1.0.1 (March 26, 2021)

#### Improvements

* Added ParaView log file, to improve future investigations.
* Added aspect ratio check when filling the form in a template.
* Allow space and dot in the case folder path.
* Disallow to run calculation, if port is not defined.
* Better automatic mesh size algorithm.
* Clearer meshing error messages.

#### Bug fixes

* Far field not created, if air box is small.
* Version update pop-up opens Windows Explorer, not the default browser.
* Hints stay visible over the third party installation settings and other modal windows.
* Meshing problems with certain mesh sizing.
* Misalignment of SWR and S11.
* Error when re-importing modified STEP model.
* Website spelling mistakes.
* Automatic determination of uniform port failed for imperfect conductor.
* Kernel crash if entered invalid input data in a template.