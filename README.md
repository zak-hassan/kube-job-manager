# Kube Job Manager

##  Problem

Kubernetes features job objects used to create pods that contain containers which execute some work. Currently there are no tools that allow you to:

* Manage Jobs Failures
* Retrigger job to rerun without providing new yaml file.
* Delete all jobs currently running that are scheduled jobs


## Idea

What if there was a tool that lets you manage your jobs all in a centralized UI which lets you retrigger your jobs if failure occurs. If a job continously fails then alerts should be logged and metrics should display job failures.

