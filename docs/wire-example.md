---
id: wire-example
title: Wire antenna simulation setup
sidebar_label: Wire antenna
---



## Geometry creation

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




