---
id: examples
title: Example geometry setups for different antennas
sidebar_label: Example setups
---

*CENOS Antenna Design* app has the possibility to simulate numerous antenna types. **In this article we will look at some of the most widely used antenna types and learn how to build their respective geometries for simulation in CENOS**!

---

## PCB/planar/patch antennas

PCB/planar/patch antennas are very widely used modern electronics. In this short guide we will take a look at **how to build patch antenna geometries in CENOS**, using its built-in geometry editor, *FreeCAD*.

---

### Substrate (dielectric)

To create a substrate volume, you need to [create a box](creation#3d-volumes) and change the parameters to your necessary values.

![assets/quickstart/Untitled.png](assets/quickstart/58.png)

---

### Patch / Conductive layers

Conductive layers can be created both as **2D sketch or as a 3D solid**.

![assets/quickstart/Untitled.png](assets/quickstart/81.png)

#### PROS/CONS

For 2D patch:
* **Easier to create** ([Sketch on surface](creation#from-scratch))
* Can **avoid meshing problems**

For 3D layer:
* Slightly more **difficult to create** (Have to create an [extrusion](creation#extrusion))
* **More accurate results**

---

### Port

Last thing we need to add is a uniform port surface. Select the side of the box and create a [uniform port](examples#uniform) sketch.

![assets/quickstart/Untitled.png](assets/quickstart/60.png)

---

### Feed networks

For more **complex patch antennas** the **feed network needs to be drawn separately**. To make the feed creation as fast and easy as possible, **CENOS has a specific tool designed for this exact purpose**.

1. Create a sketch on top of the substrate volume.

   * Create the feed lines as **1D edges**.
   
   * Create the patch surfaces as **fully closed wires**.
   
![assets/quickstart/Untitled20.png](assets/quickstart/Untitled20.png)

2. Close the sketch, switch to **Part** workbench and select the sketch object.

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

---

## Wire antennas

### Import NEC

If you have a ***.NEC*** (or other format) file, you can import it from the Part module.

<p align="center">

![NEC](assets/quickstart/61.png)

</p>

---

### Manual creation

To **create a wire antenna from scratch**, you need to create a sketch of your antenna, and then define the thickness of your wire:

1. ***CREATE A SKETCH***

    1. For **2D sketches** you can **set sketch position** in its properties (In sketch properties *Base → Placement → Position*)
    
    <p align="center">

    ![Placement](assets/quickstart/62.png)

    </p>
    
    2. To build **3D sketches**, use **Draft Workbench → Drafting → Line**. There you will need to build lines one by one and adjust the *Start* and *End* points to match your design.
    
    <p align="center">

    ![Placement](assets/quickstart/63.png)

    </p>
    
    3. For **helixes or spirals** use **Create Primitives** function in *Part* workbench.
    
    <p align="center">

    ![Placement](assets/quickstart/64.png)

    </p>
    
    In *Geometric Primitives* properties select **Helix** shape, and define your wire.
    
    <p align="center">

    ![Placement](assets/quickstart/65.png)

    </p>

2. **Create a wire** with volume from the edges, select your shape, click **Wire thickness** tool in *Part Workbench* and define the wire thickness.

<p align="center">

![NEC](assets/quickstart/66.png)

</p>

<p align="center">

![assets/quickstart/Untitled23.png](assets/quickstart/Untitled23.png)

</p>

:::caution
Sometimes when building wires, the visualization will appear like this:

<p align="center">

![assets/quickstart/Untitled23.png](assets/quickstart/67.png)

</p>

**This is a visualization problem, which does not affect the geometry itself**. You can continue and use this geometry in your setup!
:::

---

## Lumped Ports

*Ports* or *feeds* are the power source of the antenna, and it is important that we define such ports correctly. 

For this reason we need to **understand what kind of port we have, and make some additional geometry modifications accordingly**.

Currently there are two types of lumped ports in CENOS:

- *Uniform port*
- *Coaxial port*

:::tip
Antenna simulations **do not require complex port geometries**, and most connectors **can be simplified** to a single feed surface or simple connector assembly - it will make the **meshing easier and calculation faster**, while **keeping the accuracy of the results**!
:::

---

## Uniform ports

Uniform port is essentially a rectangular surface, **planar** or **curved**, which is **used in most planar antenna design simulations**.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/5.png)

</p>

### Planar

Uniform ports are **widely used in PCB antennas**, where the port connects the *patch* with the *conductive layer* (ground). In real antennas **coaxial edge connectors** are often used, but for simulation they are not necessary and you can **replace them with simple planar ports**.

![assets/quickstart/Untitled24.png](assets/example/1.png)

To **create planar feed**:

1. **[Create a sketch](creation#sketches) on the side and draw a uniform port on the edge of the patch**, connecting the top conductive layer with the ground plane.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/2.png)

</p>

### Curved

In addition to *coaxial edge connectors*, **SMA connectors** are commonly used in planar antennas. Again, the actual **connector can be simplified to a curved port**.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/3.png)

</p>

To **create curved feed**:

1. **[Create a sketch](creation#sketches)** on the patch and **draw a circle** of where the port will be.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/7.png)

</p>

2. **[Extrude](creation#extrusion)** the port through the patch.

3. Choose the patch and cylinder objects and click **Cut** boolean to create a hole in the patch.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/8.png)

</p>

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/9.png)

</p>

---

## Coaxial port

Coaxial ports are ports where the connection surface is made by a coaxial cable. For these kind of ports **you don't need to create a separate surface**, as it is already included in the volume definition.

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/10.png)

</p>

:::tip
You can create a coaxial connector yourself or use one from the **[Component Library](creation#component-library)**.
:::

Coaxial ports can be **simplified as well** - replace the complex assembly with simple cylinders!

<p align="center">

![assets/quickstart/Untitled24.png](assets/example/11.png)

</p>
