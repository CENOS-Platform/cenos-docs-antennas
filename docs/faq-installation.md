---
id: faq-installation
title: Installation & Open-source FAQ
sidebar_label: Installation/OS
---

#### Can I install *CENOS Antenna Design* app on *Windows 7*?

- No, CENOS AD app is built for usage on machines with **Windows 10 only**. Earlier versions (Win7&8) will not support it!

#### Can I install *CENOS Antenna Design* app on *virtual machine*?

- Generally there are no limitations for virtual machines, but we do not support them officially. When installing on virtual machines you need to **be careful with GPU**, as they can be outdated and not able to run *ParaView* (**it must support** ***OpenGL 3.3***), which is a relatively large problem specific to virtual machines.

#### Why can't I run *FreeCAD*?

- If you encounter problems with *FreeCAD*, **double-check your installed version**. CENOS supports only **v0.19** - if you have installed *FreeCAD* separately, the version might be different and not compatible with CENOS.

#### Why *ParaView* with calculated results is not opening?

- If you encounter problems with *ParaView*, **check your graphics drivers** and **graphics card**. Outdated graphics drivers can interfere with *ParaView*, as well as old graphics card (it must support *OpenGL 3.3*).

#### When I open CENOS, I see *Kernel* trying to connect and disconnecting continuously, and I can't use the app. What to do?

- The most common reason for such **Kernel error** is local **firewall/antivirus**, which is blocking some part of CENOS. Check if you have all necessary antivirus exceptions in place!