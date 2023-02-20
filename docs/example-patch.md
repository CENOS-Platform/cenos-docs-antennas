---
id: example-patch
title: Patch antenna simulation setup
sidebar_label: Patch antenna
---

PCB/planar/patch antennas are **very widely used in modern electronics**, and often it is **beneficial to make a computer model to predict the behaviour** of the patch antenna even before the physical tests have started.

In this guide we will take a look at **how to build a complete patch antenna simulation from scratch in CENOS Radio Frequency app**, using its built-in geometry editor, *FreeCAD*.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/44.png)

</p>



## Case setup

Before we can actually start building our simulation, we need to first prepare our case - **choose the way we will build our geometry**, and **save the case**.



### Choose geometry approach

You have three options from which to choose - **Templates**, **Import CAD** (if you have your own CAD file ready) and **Geometry Editor**.

Patch antenna **can be simulated with any one of these approaches**, as there is also a template for it, but for this example we will choose **Geometry Editor** and build our patch geometry ourselves.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/12.png)

</p>



### Save the case

At this point you need to **save the case**, otherwise if you try to open *FreeCAD*, *CENOS* will not let you move forward.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/13.png)

</p>

Once the case is saved, click the *Play* icon to open *FreeCAD* - CENOS geometry editor.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/14.png)

</p>



## Geometry creation

In *FreeCAD* we have all the possibilities to **build our antenna geometry**, and we are going to do just that.

In this *Geometry creation* section we will cover **all main points you need to complete** to build your own patch antenna geometry manually.



### Substrate (dielectric)

First thing we need to do is to build the substrate. The easiest way to do that is through box creation.

In **<span style={{ color: "blue" }}>Part</span>** workbench **[create a box](geometry-creation#primitives)** and **change the parameters** to the values corresponding to your antenna substrate.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/15.png)

</p>



### Patch / Conductive layers

Next we need to create the patch for our antenna. In **<span style={{ color: "blue" }}>Sketch</span>** workbench patch can be drawn directly on the substrate as a **[2D sketch](geometry-creation#on-volumes)** or created as a **[3D extrusion](geometry-creation#extrusion)**. **They both work!**

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/17.png)

</p>

#### PROS/CONS

For 2D patch:
* **Easier to create** ([Sketch on surface](geometry-creation#on-volumes)).
* Can **avoid meshing problems**.

For 3D layer:
* Slightly more **difficult to create** (Have to create an [extrusion](geometry-creation#extrusion)).
* **More accurate results**.



### Feed networks

For more **complex patch antennas** the **feed network needs to be drawn separately**. To make the feed creation as fast and easy as possible, **CENOS has a specific tool designed for this exact purpose**.

1.  In **<span style={{ color: "blue" }}>Sketch</span>** workbench create a sketch on top of the substrate volume.

    - Create the feed lines as **1D edges**.
   
    - Create the patch surfaces as **fully closed wires**.
   
![assets/quickstart/Untitled20.png](assets/quickstart/Untitled20.png)

2. Close the sketch, switch to **<span style={{ color: "blue" }}>Part</span>** workbench and select the sketch object.

3. Select the **Feed Network** tool

<p align="center">

![Feed Network](assets/quickstart/68.png)

</p>

4. Select all edges **with the same trace width** and click **Add** to create separate width groups for each of them.

    * Create one group with a width of 0 for the all of the **enclosed patch edges*.

![assets/quickstart/Untitled21.png](assets/quickstart/Untitled21.png)

5. Click **OK** to generate the feed network.

<p align="center">

![assets/quickstart/Untitled22.png](assets/quickstart/Untitled22.png)

</p>

:::note
You will see some visual artifacts (the golden feed surface will appear to flicker).
This happens when two surfaces overlap, **this is normal behavior and means you did everything correctly**!
:::

:::tip
You can create chamfered corners by filleting the sketch path with a radius half of the trace width:

![assets/quickstart/Untitled26.png](assets/quickstart/Untitled26.png)
:::



### Send geometry to CENOS

Once you have finished the geometry, you need to send the mesh to CENOS. To do that:

1. **Select all final objects** in the tree view.

2. Click **Geometry to CENOS**.

<p align="center">

![Send geom to CENOS](assets/quickstart/Untitled8.png)

</p>

As geometry is being sent to CENOS, **FreeCAD study will be automatically saved** in the simulation folder, so you can close it.



## Roles

Once the geometry is finished and sent to CENOS, you need to **define your geometry** before defining the physics on it.

Essentially you need to clarify which part of your geometry is the dielectric, which is the port etc., in other words, **define roles for parts of your geometry**.



### Type of antenna

Before you define roles, you need to **[select what kind of antenna you have](geometry-roles#select-the-type-of-your-antenna)** - *Microstrip*, *RFID*, *Wire*, *Reflector*, *Multi-port network*, *Waveguide* or *Other*.

For this example we choose **Microstrip/PCB** antenna type.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/20.png)

</p>



### Surface/volume roles

Now you need to **[define surface and volume roles](geometry-roles#assign-roles-to-your-geometry)** for your substrate, patch, ground and port.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/21.png)

</p>



### Got to physics

When roles are assigned, **GO TO PHYSICS** button will become active - click it to **move to the Physics definition**!

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/22.png)

</p>



## Physics

In physics you need to **define the physical parameters of your simulation**, which include **frequencies**, **material definitions** and **boundary conditions**.



### Simulation control

In **SIMULATION CONTROL** you define either a **single frequency** or a **frequency sweep**.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/23.png)

</p>



### Volumes

For substrate you only need to specify the material.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/24.png)

</p>


### Boundaries

**Boundaries** or boundary conditions have also been **predefined**:

- *Uniform Port* → Default 50 Ohm Impedance.

- *Patch* and *Ground* → **Perfect Electric Conductor**.


<p align="center">

![assets/quickstart/Untitled24.png](assets/example/25.png)

</p>

Once all physical parameters are filled, **RUN** button will become active and you will be able to **run the simulation**!

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/27.png)

</p>



## Manual meshing

If during the calculation you get a **message about meshing problems**, you will need to **[manually mesh](geometry-CENOS-meshing#manual-mesh-selection)** your antenna. You can also mesh it manually already in the _mesh generation_ section in case you want more control over your simulation.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/19.png)

</p>




## Results

When calculation is done, results will automatically open in a new window. Congratulations, you have **successfully finished a patch antenna simulation**!

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/28.png)

</p>
