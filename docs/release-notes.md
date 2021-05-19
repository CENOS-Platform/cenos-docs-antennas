---
id: release-notes
title: Release notes
sidebar_label: v1.x
---

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