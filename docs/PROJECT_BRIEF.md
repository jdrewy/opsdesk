
# OpsDesk — Project Brief

## Project Overview
OpsDesk is a full-stack IT Support and Incident
Management Platform designed to simulate real-world
IT service desk operations.

## Problem Statement
Organizations need an efficient way to receive,
organize, prioritize, assign, and resolve IT
support incidents.

OpsDesk aims to centralize this process in a
single web application.

## Target Users
1. Employees — Submit and track support requests.
2. IT Technicians — Manage and resolve incidents.
3. Administrators — Manage users and monitor performance.

## Core Features (MVP)
- Create and view support tickets
- Update ticket status and priority
- Assign tickets to IT technicians
- Search and filter incidents
- Track incident history
- Authenticate users with role-based access
- Display ticket statistics on a dashboard

## Planned Technology Stack
Frontend: React, TypeScript, Vite
Backend: Node.js, Express, TypeScript
Database: PostgreSQL
ORM: Prisma
Version Control: Git and GitHub

## Incident Workflow
Open -> Assigned -> In Progress -> Resolved -> Closed

## Future Features
- SLA monitoring and escalation
- Automated email notifications
- AI-assisted incident classification
- Advanced incident analytics
- Audit logging

## Development Principles
- Build one feature at a time
- Write readable, maintainable code
- Use Git for version control
- Keep documentation updated
- Test functionality before merging changes
- Never commit secrets or credentials

## Current Status
React frontend initialized.
GitHub repository published.
Backend and database not yet implemented.

## Next Development Milestone
Create an Express + TypeScript backend
with a GET /api/health endpoint.
