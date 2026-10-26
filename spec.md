# AI MYSTERY ROOM

## Product Specification & Single Source of Truth

**Document Type:** Software Requirements Specification (SRS) + Technical Specification
**Project Name:** AI Mystery Room
**Development Methodology:** Spec-Driven Development (SDD)
**Version:** 1.0.0
**Status:** Approved Baseline for Development
**Frontend:** React.js
**Backend:** Node.js + Express.js
**Database:** MongoDB
**AI Provider:** Google Gemini API
**Primary Development Agent:** OpenAI Codex
**Deployment Target:** Vercel-compatible frontend and backend deployment
**Primary Goal:** Create an immersive, AI-powered mystery investigation platform.

---

# 1. PROJECT OVERVIEW

## 1.1 Product Vision

AI Mystery Room is an interactive mystery-solving website where users become detectives and investigate fictional cases generated from short scenarios or stories supplied by users.

The AI creates a complete fictional investigation containing:

* A mystery scenario.
* A fictional crime or unexplained incident.
* A cast of suspects.
* A hidden culprit.
* Motives and opportunity.
* AI-generated fictional evidence.
* Simulated WhatsApp-style conversations.
* Fictional photographs and image evidence.
* Simulated CCTV recordings.
* Witness statements.
* Timelines and investigation reports.
* Contradictions and misleading clues.
* A final accusation and investigation result.

Users investigate the evidence, form theories, and select the person they believe is responsible.

The application evaluates the accusation against the original case solution and explains whether the user solved the mystery.

## 1.2 Core Experience

The complete user journey:

1. The user opens AI Mystery Room.
2. The user chooses a predefined mystery or creates one using a short story.
3. The user configures the difficulty and investigation settings.
4. The AI generates a complete fictional mystery.
5. The backend validates and saves the case.
6. The user enters the investigation room.
7. The user explores suspects and evidence.
8. The user reviews conversations, images, timelines, and simulated CCTV.
9. The user connects clues and develops a theory.
10. The user submits a final accusation.
11. The backend evaluates the accusation.
12. The user receives a result, explanation, score, and case summary.
13. The user can replay the case, investigate another mystery, or return to the dashboard.

## 1.3 Product Principles

The application MUST follow these principles:

1. **Mystery first:** Every feature should improve the investigation experience.
2. **Fair investigations:** The culprit must be identifiable using evidence available to the player.
3. **Consistent stories:** Suspect details, timestamps, locations, and evidence must not contradict the canonical solution accidentally.
4. **Server-side secrets:** The correct culprit and solution must never be exposed through frontend data before submission.
5. **AI-generated fiction:** Cases and evidence must be clearly fictional.
6. **Structured AI output:** AI responses must follow validated schemas.
7. **Secure by design:** API keys, authentication, and private case solutions must be protected.
8. **Responsive design:** The experience must work on mobile, tablet, and desktop.
9. **Graceful failure:** AI timeouts and invalid responses must not destroy user progress.
10. **Maintainability:** All significant behavior must be documented, testable, and modular.

---

# 2. PROJECT SCOPE

## 2.1 MVP Features — Mandatory

The first production-ready version MUST include:

* Landing page.
* User registration and login.
* Guest investigation mode, if supported by the selected authentication design.
* Dashboard.
* Create-a-mystery form.
* Difficulty selection.
* AI-generated fictional cases.
* Suspect profiles.
* Evidence investigation room.
* WhatsApp-style fictional chat evidence.
* Image evidence.
* Simulated CCTV evidence.
* Witness statements.
* Case timeline.
* Evidence collection and review.
* Notes and theory-taking functionality.
* Final culprit selection.
* Backend-side accusation evaluation.
* Case results and explanations.
* Investigation history.
* Save and resume functionality.
* Responsive interface.
* Loading, empty, and error states.
* Basic rate limiting and AI usage controls.
* Automated tests for core workflows.

## 2.2 Post-MVP Features

The following features are optional and MUST NOT delay the MVP:

* Multiplayer investigations.
* Real-time collaborative detective rooms.
* Leaderboards.
* Competitive tournaments.
* User-created public mystery sharing.
* Daily mystery challenges.
* Achievement systems.
* Detective ranks.
* Advanced 3D investigation environments.
* Voice-based suspect interrogation.
* AI-generated video with actual motion.
* Community comments and discussions.
* Subscription plans.
* Administrative analytics dashboard.
* Social sharing of investigation results.

Implement these only after the MVP is stable and the relevant requirements are approved.

## 2.3 Out of Scope

The application MUST NOT:

* Investigate real crimes.
* Present generated allegations against real individuals as facts.
* Analyze actual private WhatsApp conversations or surveillance footage as part of the initial MVP.
* Request access to users' real messaging accounts or cameras.
* Impersonate law enforcement agencies.
* Claim that AI-generated evidence is authentic forensic evidence.
* Require paid AI-generated video services for the core experience.
* Reveal the solution to an active investigation through public API responses.

---

# 3. TARGET USERS

## 3.1 Primary Users

People who enjoy:

* Detective stories.
* Crime fiction.
* Mystery-solving games.
* Escape rooms.
* Logical reasoning.
* Interactive storytelling.
* Puzzle games.

## 3.2 Secondary Users

* Students interested in reasoning exercises.
* Groups looking for interactive entertainment.
* Content creators producing fictional detective challenges.
* Users who want to create personalized mysteries from their own story ideas.

## 3.3 User Personas

### Persona A: The Detective

Wants to solve a mystery by reviewing clues, comparing statements, and identifying contradictions.

### Persona B: The Story Creator

Wants to enter a short story and receive a playable investigation based on it.

### Persona C: The Casual Player

Wants a quick, entertaining mystery that can be completed in approximately 10–20 minutes.

These personas are design assumptions, not verified usage statistics.

---

# 4. FUNCTIONAL REQUIREMENTS

## FR-001: Landing Page

The landing page MUST include:

* Product name: AI Mystery Room.
* A compelling headline.
* A short product explanation.
* A primary CTA: "Start Investigating".
* A secondary CTA: "Create Your Own Mystery".
* A featured mystery section.
* A short explanation of how the game works.
* A section explaining difficulty levels.
* A visual preview of the investigation room.
* Footer with legal and privacy links.

Suggested headline:

"Every Clue Hides a Secret. Can You Find the Truth?"

The landing page MUST be responsive and accessible.

## FR-002: Authentication

Users MUST be able to:

* Register with email and password.
* Log in.
* Log out.
* Access their investigation dashboard.
* View their saved investigations.
* Resume an unfinished investigation.

The authentication implementation MUST use secure password hashing or a trusted authentication provider.

The frontend MUST NOT store authentication secrets in insecure browser storage.

Protected backend routes MUST verify the user's identity and authorization.

Guest mode is optional. If implemented, guest sessions MUST have appropriate expiration and resource limits.

## FR-003: Dashboard

The dashboard MUST display:

* Welcome message.
* Start New Investigation button.
* Create Your Own Mystery button.
* Available predefined mysteries.
* In-progress investigations.
* Completed investigations.
* Recent investigation results.
* Basic statistics, such as cases solved and accuracy.

Statistics MUST be calculated from actual saved records rather than hardcoded values.

If a user has no investigations, display a useful empty state.

## FR-004: Mystery Creation

The mystery creation page MUST contain:

### Required fields

**Story or Scenario**

A multiline text input where the user describes the incident.

Example:

"During a private dinner at an old mansion, a priceless diamond disappears. Five guests were present, but everyone claims they left the room before the lights went out."

### Optional fields

* Mystery title.
* Setting.
* Mystery category.
* Number of suspects.
* Difficulty level.
* Estimated play duration.
* Preferred evidence types.
* Story tone.

### Difficulty levels

**Easy**

* Approximately 3 suspects.
* Clear clues.
* Limited red herrings.
* Shorter investigation.

**Medium**

* Approximately 4–5 suspects.
* Multiple evidence sources.
* Contradictory statements.
* Some misleading clues.

**Hard**

* Approximately 5–6 suspects.
* Interconnected clues.
* More complex timelines.
* Multiple plausible theories.
* Subtle contradictions requiring careful reasoning.

These are initial configuration targets, not guarantees of exact AI output.

### Evidence preferences

Users may choose:

* Chat messages.
* Image evidence.
* Simulated CCTV.
* Witness statements.
* Timelines.
* Documents.
* Physical evidence descriptions.

At least three distinct evidence items MUST be generated for a valid case.

The backend MUST enforce reasonable limits on story length, suspect count, generation frequency, and total evidence size.

The form MUST clearly communicate that the resulting investigation is fictional.

## FR-005: AI Mystery Generation

The backend MUST use the Gemini API to generate a structured fictional investigation.

The generated case MUST include:

1. Case metadata.
2. Case introduction.
3. Incident description.
4. Setting and timeline.
5. Suspects.
6. Motives and opportunities.
7. Canonical solution.
8. Evidence items.
9. Witness statements.
10. Timeline events.
11. Clue relationships.
12. Red herrings.
13. A final explanation.
14. An evaluation rubric.

### Critical generation rule

The AI MUST establish the complete solution BEFORE generating the evidence.

The correct culprit, motive, and explanation form the canonical solution.

All subsequent evidence MUST be consistent with that solution unless an inconsistency is deliberately part of the mystery.

The system MUST NOT generate unrelated evidence first and randomly select a culprit afterward.

### Generation pipeline

1. Validate the user input.
2. Normalize generation settings.
3. Create a generation job.
4. Request structured case generation from Gemini.
5. Parse the model response.
6. Validate it against the case schema.
7. Check suspect references and evidence relationships.
8. Validate clue solvability and canonical consistency.
9. Retry or repair invalid output within configured limits.
10. Save the validated case.
11. Create the user's investigation session.
12. Return only player-safe case information.

The application MUST NOT expose the private solution during generation.

### Generation failures

If generation fails:

* Return a clear error.
* Do not create a partially playable case.
* Preserve the user's scenario input.
* Allow a retry.
* Avoid duplicate case creation during retries.
* Record diagnostic information without logging secrets.

## FR-006: Investigation Room

The investigation room is the primary gameplay interface.

It MUST include:

* Case title.
* Case introduction.
* Incident summary.
* Suspect list.
* Evidence collection.
* Evidence detail viewer.
* Timeline.
* Investigation notes.
* Case progress indicator.
* Final accusation button.

### Suggested layout

**Desktop**

Left sidebar:

* Case overview.
* Suspects.
* Evidence categories.
* Timeline.
* Notes.

Center panel:

* Selected evidence.
* Image viewer.
* Conversation viewer.
* CCTV simulation player.
* Witness statements.

Right panel:

* Selected suspect details.
* Clue connections.
* Investigation progress.

**Mobile**

Use a responsive single-column layout with navigation tabs or drawers.

The mobile interface MUST preserve all core investigative capabilities.

### Gameplay rules

* Evidence can be opened and reviewed repeatedly.
* The player can switch between suspects and evidence.
* The player can take private notes.
* The player can mark evidence as important.
* The player can revisit the timeline.
* The player can submit an accusation when the required conditions are satisfied.

The interface MUST NOT reveal the canonical solution before the player submits an accusation.

## FR-007: Suspect Profiles

Each suspect MUST have:

* Unique suspect ID.
* Name.
* Fictional age, where appropriate.
* Relationship to the incident.
* Background.
* Potential motive.
* Known whereabouts.
* Statement.
* Relevant evidence references.
* Publicly visible information.

The canonical solution MAY contain additional private fields, including the actual motive and explanation.

Suspects MUST be fictional characters.

The backend MUST ensure that suspect IDs remain consistent across evidence, statements, and timeline events.

## FR-008: WhatsApp-Style Evidence

The application MUST support fictional messaging conversations.

Each conversation MUST contain:

* Conversation ID.
* Participant IDs.
* Display names.
* Ordered messages.
* Timestamps.
* Optional attachment references.
* Evidence significance.
* Associated clue references.

Each message MUST contain:

* Message ID.
* Sender ID.
* Timestamp.
* Message content.
* Optional attachment.
* Optional reply reference.

### UI requirements

The conversation viewer SHOULD resemble a familiar messaging interface without copying protected branding assets unnecessarily.

It SHOULD display:

* Message bubbles.
* Sender names.
* Timestamps.
* Date separators.
* Image attachment previews.
* Conversation participants.

### Investigation requirements

Conversations may contain:

* Relevant information.
* Contradictory statements.
* Hidden relationships.
* Suspicious timing.
* Misleading but explainable details.

Every important clue MUST connect to the canonical solution.

The application MUST clearly identify these conversations as fictional in the case's overall context.

## FR-009: Image Evidence

The application MUST support fictional images associated with the investigation.

Examples include:

* A room before an incident.
* An object found at the scene.
* A fictional photograph from an event.
* A simulated security-camera still.
* A suspicious object or location.

### Implementation strategy

For the MVP, use this priority order:

1. Gemini-generated images, if the selected model supports image generation.
2. Another approved image-generation provider, if configured.
3. Curated fictional illustrations or placeholders.
4. Text-based evidence cards as a fallback.

The application MUST NOT assume that every Gemini text-generation model can generate images.

Image generation MUST be implemented through a provider abstraction.

If image generation fails, the investigation MUST remain playable.

Generated images MUST be associated with evidence records and stored using an appropriate asset-storage solution.

Do not store large binary image files directly in ordinary MongoDB documents.

## FR-010: Simulated CCTV Evidence

The application MUST support CCTV-style evidence.

### MVP implementation

CCTV evidence can be implemented as a simulated player containing:

* A fictional camera location.
* A recording timestamp.
* A duration.
* A still image or sequence of generated frames.
* A playback timeline.
* A description of visible events.
* Optional timestamps for significant moments.
* Evidence annotations.

The interface MAY simulate recording playback, scan lines, timestamps, and camera overlays.

These visual effects MUST NOT be represented as genuine security footage.

### Video-generation strategy

Actual AI-generated video is optional.

If no video-generation provider is configured, the application MUST use the simulated CCTV implementation.

The core investigation MUST NOT depend on a paid video-generation API.

## FR-011: Witness Statements

Witness evidence MUST include:

* Witness identity.
* Statement text.
* Statement timestamp.
* Associated suspect or event.
* Related evidence references.
* Optional contradictions.

Witness statements MUST be consistent with the canonical story.

Deliberate lies are allowed only when they have a defined narrative explanation.

## FR-012: Timeline

The investigation MUST display relevant events in chronological order.

Each timeline event MUST contain:

* Event ID.
* Timestamp.
* Description.
* Location.
* Associated characters.
* Evidence references.

The timeline MUST support:

* Chronological sorting.
* Reviewing event details.
* Opening related evidence.
* Identifying missing or conflicting information.

Timezone handling MUST be consistent. Story timestamps should use an explicit fictional case timezone or a clearly defined local-time convention.

## FR-013: Investigation Notes

Users MUST be able to:

* Write private notes.
* Edit notes.
* Save notes.
* Mark evidence as important.
* Review their notes later.

Notes MUST be associated with the user's investigation session.

Notes MUST NOT be used to alter the canonical solution.

The system MUST prevent users from accessing another user's notes.

## FR-014: Final Accusation

The accusation screen MUST allow users to:

1. Review all suspects.
2. Select one suspect.
3. Enter an optional explanation.
4. Select supporting evidence, if desired.
5. Submit the final accusation.
6. View the result.

The backend MUST evaluate the submitted suspect against the stored canonical solution.

The client MUST NOT send the correct answer as an authoritative input.

The client MUST NOT determine the final result independently.

The initial MVP SHOULD permit one final accusation per investigation.

If multiple attempts are introduced later, attempt limits and scoring rules must be explicitly specified.

## FR-015: Results Page

After submission, the results page MUST display:

* Whether the accusation was correct.
* The selected suspect.
* The actual culprit.
* The motive.
* The sequence of events.
* The explanation for the crime or incident.
* The most important clues.
* Why misleading clues were misleading.
* How the evidence supports the solution.
* The user's investigation score.
* An option to replay or start another case.

The solution MUST be revealed only after a valid final submission or through another explicitly authorized reveal action.

The result MUST be based on the server's stored solution.

## FR-016: Investigation History

Users MUST be able to view:

* Case title.
* Difficulty.
* Creation date.
* Investigation status.
* Completion date.
* Selected suspect.
* Final result.
* Score.

Users MUST be able to reopen unfinished investigations.

Completed investigations SHOULD remain available for review.

The backend MUST verify that the requesting user owns the investigation or has explicit permission to access it.

---

# 5. NON-FUNCTIONAL REQUIREMENTS

## NFR-001: Performance

Initial targets:

* Landing page: usable within approximately 3 seconds on a typical broadband connection.
* Normal API requests: target p95 response time below 500 ms, excluding AI generation and other external services.
* Investigation navigation: should not require a new AI request for every interaction.
* Evidence already loaded: should open without unnecessary network requests.
* AI generation: show meaningful progress and status updates.

These are engineering targets, not guaranteed service-level commitments.

## NFR-002: Reliability

* AI failures MUST be handled gracefully.
* Invalid model responses MUST NOT enter the playable case database.
* User progress MUST survive normal navigation and refreshes.
* Saving notes MUST not depend on the AI provider.
* Retry operations MUST avoid duplicate investigations.
* The system MUST distinguish generation failures from application failures.

## NFR-003: Security

* Store Gemini API keys only on the backend.
* Hash passwords using an appropriate password-hashing algorithm.
* Validate all user inputs on the server.
* Enforce authorization for every protected resource.
* Apply rate limits to authentication and AI-generation endpoints.
* Protect against NoSQL injection.
* Configure CORS explicitly.
* Use secure authentication cookies when cookie-based sessions are selected.
* Protect cookie-authenticated state-changing requests against CSRF.
* Do not return private case solutions in public API responses.
* Avoid logging passwords, access tokens, or sensitive configuration.
* Restrict request sizes and generation costs.

## NFR-004: Privacy

* Collect only information required for the application.
* Provide a privacy notice.
* Allow users to delete their account and associated personal data, subject to applicable retention requirements.
* Do not use real private conversations or surveillance recordings in the MVP.
* Keep investigation notes private.
* Explain that cases and evidence are AI-generated fiction.

## NFR-005: Accessibility

Target WCAG 2.2 AA where practical.

Requirements include:

* Keyboard navigation.
* Visible focus states.
* Sufficient color contrast.
* Semantic HTML.
* Accessible labels.
* Meaningful image alternative text.
* Responsive text sizing.
* Reduced-motion support.
* Error messages that are understandable without relying on color alone.

## NFR-006: Maintainability

* Use modular architecture.
* Separate business logic from HTTP controllers.
* Use shared validation schemas.
* Maintain environment-variable documentation.
* Use consistent error handling.
* Provide automated tests.
* Document database models and API contracts.
* Avoid unnecessary duplicated logic.

---

# 6. TECHNOLOGY STACK

## 6.1 Frontend

Required:

* React.js.
* Vite.
* TypeScript.
* React Router.
* A consistent styling system, such as Tailwind CSS.
* A server-state management library where needed.
* A form validation solution.
* A shared API client.
* Accessible reusable components.

Recommended:

* TanStack Query for server-state management.
* React Hook Form for forms.
* Zod for client-side and shared schema validation where practical.
* Lucide React for icons.

The exact library versions MUST be recorded in the lockfile.

Codex MUST NOT replace the agreed stack without documenting the reason and obtaining approval.

## 6.2 Backend

Required:

* Node.js.
* Express.js.
* TypeScript.
* MongoDB.
* Mongoose.
* Google Gemini API integration.
* Server-side schema validation.
* Centralized error handling.

The backend MUST use a modular structure:

* Routes.
* Controllers.
* Services.
* Models.
* Middleware.
* Validators.
* Configuration.
* Utilities.
* Tests.

## 6.3 Database

Use MongoDB with Mongoose schemas.

All important documents MUST have timestamps.

Required indexes MUST be created for frequently queried fields.

Unique constraints MUST be added where appropriate.

## 6.4 AI Integration

Use Google's official supported Gemini SDK.

The integration MUST:

* Read the API key from environment variables.
* Use a configurable model identifier.
* Request structured output where supported.
* Validate the response independently.
* Support timeouts.
* Apply bounded retries.
* Record generation status.
* Handle rate limits.
* Avoid exposing provider error details to end users.
* Keep provider-specific code inside the AI service layer.

The chosen model MUST be configured rather than scattered as a hardcoded string across the application.

The selected model's current capabilities and structured-output support MUST be verified during implementation.

---

# 7. SYSTEM ARCHITECTURE

## 7.1 High-Level Architecture

The system consists of five primary components.

### A. React Frontend

Responsibilities:

* Display the user interface.
* Handle forms and navigation.
* Display evidence.
* Manage temporary interface state.
* Request backend operations.
* Display investigation results.

The frontend MUST NOT contain the canonical solution.

### B. Express Backend

Responsibilities:

* Authentication.
* Authorization.
* Request validation.
* Investigation lifecycle management.
* AI generation orchestration.
* Accusation evaluation.
* Notes and progress management.
* API rate limiting.
* Data access.

### C. MongoDB

Stores:

* User accounts.
* Mystery cases.
* Investigation sessions.
* Evidence.
* Notes and progress.
* Accusation submissions.
* Investigation results.
* Generation job metadata.

### D. Gemini Service

Responsibilities:

* Generate fictional mystery cases.
* Generate suspects and evidence.
* Help produce structured clue relationships.
* Generate explanations.
* Optionally assist with case validation.

Gemini MUST NOT be the sole authority for determining whether the user's accusation is correct. The server evaluates the accusation against the stored canonical solution.

### E. Asset Storage

Stores generated image assets and optional media.

Use object storage or another appropriate asset-storage provider.

MongoDB stores asset references and metadata rather than large binary files.

## 7.2 Request Flow

Mystery creation:

React UI
→ Express API
→ Authentication and input validation
→ Generation service
→ Gemini API
→ Output validation
→ Case consistency validation
→ MongoDB
→ Player-safe response
→ Investigation Room

Final accusation:

React UI
→ Express API
→ Authentication and ownership validation
→ Submission validation
→ Canonical solution lookup
→ Server-side evaluation
→ Result persistence
→ Player-safe result response

---

# 8. DATABASE DESIGN

The following collections define the logical data model.

Implementation details may evolve, but changes MUST preserve the security and behavioral guarantees in this specification.

## 8.1 User Collection

Collection: `users`

Fields:

* `_id`
* `displayName`
* `email`
* `passwordHash`, if password authentication is used
* `role`
* `createdAt`
* `updatedAt`

Rules:

* Email MUST be unique after normalization.
* Password hashes MUST never be returned in API responses.
* Public profile responses MUST use an explicit allowlist.
* Role changes MUST be authorized.

## 8.2 Mystery Case Collection

Collection: `mysterycases`

Fields:

* `_id`
* `title`
* `scenario`
* `category`
* `setting`
* `difficulty`
* `estimatedDurationMinutes`
* `suspects`
* `evidence`
* `timeline`
* `clueRelationships`
* `canonicalSolution`
* `evaluationRubric`
* `generationMetadata`
* `createdBy`
* `visibility`
* `createdAt`
* `updatedAt`

### Canonical solution

The private `canonicalSolution` field MUST contain:

* `culpritSuspectId`
* `motive`
* `methodOrMechanism`
* `opportunityExplanation`
* `chronologicalExplanation`
* `evidenceReasoning`
* `redHerringExplanations`
* `finalReveal`

The method or mechanism must be appropriate for the fictional scenario and comply with applicable safety requirements.

### Access rule

The public case serializer MUST omit:

* `canonicalSolution`
* Private evaluation data.
* Hidden suspect fields.
* Internal generation prompts.
* Provider metadata that should not be disclosed.

Never serialize a complete case document directly to the frontend.

## 8.3 Investigation Collection

Collection: `investigations`

Fields:

* `_id`
* `userId`
* `caseId`
* `status`
* `startedAt`
* `lastActivityAt`
* `completedAt`
* `viewedEvidenceIds`
* `bookmarkedEvidenceIds`
* `notes`
* `selectedSuspectId`
* `accusationCount`
* `score`
* `resultSummary`
* `createdAt`
* `updatedAt`

Allowed status values:

* `generating`
* `in_progress`
* `completed`
* `failed`
* `abandoned`

Rules:

* An investigation MUST belong to a valid user or supported guest session.
* A case solution MUST be accessed only through authorized server-side logic.
* Notes and progress MUST be scoped to the investigation owner.
* Completed investigations MUST not be reopened for editing unless explicitly supported.

## 8.4 Evidence Model

Evidence can be stored as embedded subdocuments within a mystery case.

Each evidence item MUST contain:

* `id`
* `type`
* `title`
* `description`
* `timestamp`
* `location`
* `assetReferences`
* `visibility`
* `relatedSuspectIds`
* `relatedTimelineEventIds`
* `clueReferences`
* `playerFacingContent`

Supported types:

* `chat`
* `image`
* `cctv`
* `witness_statement`
* `document`
* `physical_evidence`
* `timeline_event`

Evidence-specific payloads SHOULD use discriminated schemas so that chat evidence, images, and CCTV records have their own validated structures.

Private evidence annotations MUST remain server-side.

## 8.5 Accusation Collection

Collection: `accusations`

Fields:

* `_id`
* `investigationId`
* `userId`
* `selectedSuspectId`
* `explanation`
* `supportingEvidenceIds`
* `isCorrect`
* `score`
* `submittedAt`

Rules:

* The backend MUST validate that the selected suspect belongs to the associated case.
* The backend MUST calculate correctness.
* The result MUST NOT depend on a client-supplied `isCorrect` value.
* The accusation history MUST not reveal hidden information before submission.

## 8.6 Generation Job Collection

Collection: `generationjobs`

Fields:

* `_id`
* `userId`
* `requestHash`
* `status`
* `stage`
* `attemptCount`
* `caseId`
* `safeErrorCode`
* `startedAt`
* `completedAt`
* `createdAt`
* `updatedAt`

Allowed status values:

* `queued`
* `processing`
* `completed`
* `failed`

This collection supports generation status, retry handling, diagnostics, and idempotency.

---

# 9. AI CASE GENERATION SPECIFICATION

## 9.1 Generation Contract

Gemini MUST return a structured object conforming to a versioned case schema.

The exact schema MUST be implemented in the codebase and validated before persistence.

Illustrative structure:

{
"schemaVersion": "1.0",
"title": "The Missing Diamond",
"scenario": "A diamond disappears during a private dinner.",
"difficulty": "medium",
"setting": {
"location": "A fictional mansion",
"date": "2026-10-20",
"timezone": "Asia/Kolkata"
},
"incident": {
"description": "A priceless diamond disappears during dinner.",
"incidentTime": "2026-10-20T20:30:00+05:30"
},
"suspects": [],
"evidence": [],
"timeline": [],
"clueRelationships": [],
"canonicalSolution": {
"culpritSuspectId": "suspect_03",
"motive": "A fictional motive",
"methodOrMechanism": "A non-actionable fictional explanation",
"opportunityExplanation": "Explanation of opportunity",
"chronologicalExplanation": "Reconstruction of events",
"evidenceReasoning": [],
"redHerringExplanations": [],
"finalReveal": "The complete explanation"
},
"evaluationRubric": {
"requiredReasoningPoints": [],
"supportingEvidenceIds": []
}
}

This is an illustrative contract, not the final TypeScript schema. All IDs and references MUST be validated.

## 9.2 Required Validation

Before publishing a generated case, verify:

1. The case has a title and a meaningful incident.
2. The suspect count falls within configured limits.
3. Every suspect has a unique ID.
4. The culprit references an existing suspect.
5. Evidence IDs are unique.
6. All suspect references are valid.
7. All timeline references are valid.
8. All evidence references are valid.
9. The canonical solution is complete.
10. The final explanation agrees with the canonical solution.
11. The evidence supports the intended solution.
12. Important contradictions have explanations.
13. At least three evidence items exist.
14. Required evidence types are present when generation is expected to provide them.
15. No required content is missing.
16. The response contains no unexpected executable content.
17. The response conforms to the expected schema.

Cases that fail validation MUST NOT become playable.

## 9.3 Solvability Requirements

Every mystery MUST contain enough evidence for a reasonable player to identify the intended culprit.

A valid case MUST provide:

* At least two independently meaningful clues supporting the solution.
* A plausible reason for suspecting the actual culprit.
* A way to distinguish the culprit from at least one alternative suspect.
* A coherent timeline.
* An explanation for important red herrings.

The AI may generate ambiguous details, but the final solution MUST be supported by the case's actual evidence.

Automated consistency checks SHOULD be supplemented by a structured AI critique or repair pass when appropriate.

AI critique is a validation aid, not a substitute for deterministic schema validation.

## 9.4 Prompt Security

User-provided scenarios are untrusted input.

The generation service MUST:

* Treat scenario text as story content, not privileged instructions.
* Enforce the application's system-level rules.
* Prevent user content from overriding the output schema.
* Avoid including secrets in prompts.
* Limit input and output sizes.
* Validate generated content independently.
* Reject unsupported or unsafe requests.
* Avoid treating AI output as executable code.

The model MUST NOT be permitted to change application authorization, expose API keys, or bypass validation.

## 9.5 Retry Policy

Use bounded retries.

Recommended initial policy:

* Maximum of two repair attempts after the first invalid response.
* Configurable request timeout.
* Exponential backoff for eligible transient failures.
* No retry for permanent authentication or configuration errors.
* A maximum generation duration.

All retry counts MUST be configurable.

If generation still fails, mark the job as failed and return a safe error.

Do not create duplicate playable cases when a request is retried.

---

# 10. SCORING SYSTEM

The MVP MUST use a transparent scoring system.

Recommended default:

| Component                     | Points |
| ----------------------------- | -----: |
| Correct culprit selection     |     70 |
| Evidence reasoning quality    |     20 |
| Supporting evidence selection |     10 |
| Maximum                       |    100 |

## 10.1 Culprit Selection

* Correct culprit: 70 points.
* Incorrect culprit: 0 points for this component.

## 10.2 Evidence Reasoning

If the user provides an explanation, the backend MAY evaluate it using a structured Gemini evaluation request.

The evaluator MUST compare the explanation against the stored canonical solution and evaluation rubric.

It SHOULD assess:

* Correct motive identification.
* Correct interpretation of key clues.
* Correct reconstruction of events.
* Recognition of contradictions.

The evaluator MUST NOT invent facts absent from the case.

It MUST return validated structured output.

If the evaluation service fails, the application MUST preserve the completed accusation and use a defined fallback, such as awarding zero reasoning points and marking the reasoning score as unavailable for recalculation.

## 10.3 Supporting Evidence

Supporting evidence SHOULD be scored using deterministic rules.

For example, the case can define a list of relevant evidence IDs and their approved point weights.

The backend calculates the score from the selected evidence.

## 10.4 Final Result

Store the final result on the server.

The frontend MUST NOT calculate or overwrite the authoritative score.

The exact scoring weights may be changed only through an approved specification update.

---

# 11. API SPECIFICATION

Base path:

`/api/v1`

All request and response bodies MUST use JSON unless explicitly documented otherwise.

All error responses MUST follow a consistent structure.

Example:

{
"success": false,
"error": {
"code": "CASE_GENERATION_FAILED",
"message": "We could not create this mystery. Please try again."
}
}

Never return raw stack traces or secrets.

## 11.1 Authentication

### POST `/auth/register`

Creates a user account.

Request:

* `displayName`
* `email`
* `password`

Response:

* Safe user profile.
* Authentication result.

### POST `/auth/login`

Authenticates a user.

### POST `/auth/logout`

Ends the authenticated session.

### GET `/auth/me`

Returns the authenticated user's safe profile.

## 11.2 Mystery Creation

### POST `/cases/generate`

Starts mystery generation.

Request:

* `scenario`
* `difficulty`
* `category`
* `suspectCount`
* `evidencePreferences`
* `tone`
* `estimatedDurationMinutes`

Response:

* `jobId`
* `status`

The endpoint MAY return `202 Accepted` when generation is asynchronous.

### GET `/generation-jobs/:jobId`

Returns the current generation status.

The caller MUST be authorized to access the job.

### GET `/cases`

Lists available cases.

Must return only cases the current user is authorized to access.

### GET `/cases/:caseId`

Returns player-safe case details.

Must exclude the canonical solution and hidden evaluation fields.

## 11.3 Investigations

### POST `/investigations`

Creates or starts an investigation for a playable case.

### GET `/investigations`

Returns the current user's investigation history.

### GET `/investigations/:investigationId`

Returns authorized investigation details and safe case information.

### PATCH `/investigations/:investigationId/progress`

Updates viewed evidence, bookmarks, and other permitted progress fields.

### PATCH `/investigations/:investigationId/notes`

Creates or updates private notes.

The backend MUST reject changes to fields outside the permitted update schema.

## 11.4 Accusation

### POST `/investigations/:investigationId/accusations`

Request:

* `selectedSuspectId`
* `explanation`
* `supportingEvidenceIds`

Response after successful evaluation:

* `isCorrect`
* `score`
* `resultSummary`
* `completedAt`

The server MUST:

1. Authenticate the user.
2. Verify investigation ownership.
3. Verify the investigation is eligible for submission.
4. Verify the suspect belongs to the case.
5. Validate supporting evidence.
6. Evaluate the selection against the stored solution.
7. Calculate the score.
8. Persist the accusation and result.
9. Return the authorized result.

### GET `/investigations/:investigationId/result`

Returns the result only if the investigation has been completed or the user has another explicit authorization to reveal the solution.

## 11.5 Account

### DELETE `/account`

Deletes the user's account and handles associated personal data according to the documented retention policy.

## 11.6 API Rules

Every endpoint MUST define:

* Authentication requirements.
* Authorization requirements.
* Request schema.
* Response schema.
* Error codes.
* Validation behavior.
* Rate-limit policy where applicable.

Use pagination for potentially large lists.

Do not expose database models directly as API contracts.

---

# 12. FRONTEND ROUTES

The following routes define the initial application structure.

| Route                                    | Page                  | Access        |
| ---------------------------------------- | --------------------- | ------------- |
| `/`                                      | Landing page          | Public        |
| `/login`                                 | Login                 | Public        |
| `/register`                              | Registration          | Public        |
| `/dashboard`                             | Dashboard             | Authenticated |
| `/create-mystery`                        | Mystery creation      | Authenticated |
| `/generation/:jobId`                     | Generation progress   | Authorized    |
| `/cases/:caseId`                         | Case details          | Authorized    |
| `/investigation/:investigationId`        | Investigation room    | Authorized    |
| `/investigation/:investigationId/accuse` | Accusation screen     | Authorized    |
| `/investigation/:investigationId/result` | Results page          | Authorized    |
| `/history`                               | Investigation history | Authenticated |
| `/settings`                              | Account settings      | Authenticated |
| `/privacy`                               | Privacy policy        | Public        |
| `/terms`                                 | Terms of use          | Public        |
| `*`                                      | Not-found page        | Public        |

Routes are logical entry points. Internal investigation tabs MAY use nested routes or component state.

The backend MUST independently enforce authorization regardless of frontend route protection.

---

# 13. UI/UX DESIGN SYSTEM

## 13.1 Visual Direction

The design MUST feel like a premium detective investigation experience.

Design keywords:

* Cinematic.
* Mysterious.
* Immersive.
* Modern.
* Professional.
* Evidence-driven.
* Atmospheric.
* Clean and readable.

Avoid making the interface look like a generic administration dashboard.

## 13.2 Color Palette

Suggested starting palette:

* Primary background: `#0B0D12`
* Secondary background: `#151922`
* Card background: `#1C2230`
* Primary accent: `#D4A64A`
* Secondary accent: `#7AA7FF`
* Primary text: `#F5F7FA`
* Secondary text: `#A7B0C0`
* Success: `#38B779`
* Error: `#E35D6A`

These colors are the initial design baseline. Codex may refine their usage while maintaining the visual direction and accessibility requirements.

## 13.3 Typography

Use a clear, modern sans-serif typeface for interface content.

Use a distinctive display typeface for major headings where appropriate.

Body text MUST prioritize readability.

Evidence timestamps, labels, and metadata MUST remain legible on mobile devices.

## 13.4 Component Library

Build reusable components:

* Button.
* Input.
* Textarea.
* Select.
* Dialog.
* Toast.
* Modal.
* Card.
* Badge.
* Tabs.
* Sidebar.
* Navigation bar.
* Evidence card.
* Suspect card.
* Timeline item.
* Chat bubble.
* CCTV player.
* Image viewer.
* Loading skeleton.
* Empty state.
* Error state.
* Confirmation dialog.

## 13.5 Animation

Use restrained animations for:

* Opening evidence.
* Changing investigation tabs.
* Revealing completed results.
* Displaying loading progress.
* Highlighting selected clues.

Respect reduced-motion preferences.

Animations MUST NOT prevent keyboard access or delay critical interactions unnecessarily.

## 13.6 Required UI States

Every data-driven screen MUST account for:

* Initial loading.
* Successful data load.
* Empty state.
* Validation errors.
* API failure.
* Unauthorized access.
* Missing resource.
* Retry.
* AI generation in progress.
* AI generation failure.
* Submission in progress.

A page MUST NOT remain indefinitely blank when a request fails.

---

# 14. PROJECT DIRECTORY STRUCTURE

Use a maintainable monorepo structure.

```text
ai-mystery-room/
│
├── README.md
├── package.json
├── .gitignore
├── .env.example
│
├── specs/
│   ├── SPEC.md
│   ├── REQUIREMENTS.md
│   ├── ARCHITECTURE.md
│   ├── API.md
│   ├── DATABASE.md
│   ├── AI_GENERATION.md
│   ├── UI_UX.md
│   ├── SECURITY.md
│   ├── TESTING.md
│   └── DECISIONS.md
│
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── mysteries/
│   │   │   ├── investigation/
│   │   │   ├── evidence/
│   │   │   ├── accusation/
│   │   │   └── results/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   ├── types/
│   │   ├── styles/
│   │   └── main.tsx
│   └── tests/
│
├── backend/
│   ├── package.json
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── auth/
│   │   │   ├── ai/
│   │   │   ├── generation/
│   │   │   ├── investigation/
│   │   │   ├── evidence/
│   │   │   ├── scoring/
│   │   │   └── storage/
│   │   ├── models/
│   │   ├── validators/
│   │   ├── types/
│   │   ├── utils/
│   │   └── tests/
│   └── tsconfig.json
│
└── docs/
    ├── SETUP.md
    ├── DEPLOYMENT.md
    └── OPERATIONS.md
```

Codex MUST maintain this logical separation even if minor structural changes are needed.

Do not create empty modules merely to match the diagram. Create modules as their implementation becomes necessary.

---

# 15. ENVIRONMENT CONFIGURATION

Create `.env.example` files containing placeholders only.

Required configuration may include:

```dotenv
NODE_ENV=development
PORT=5000

MONGODB_URI=

GEMINI_API_KEY=
GEMINI_MODEL=

FRONTEND_URL=http://localhost:5173
API_BASE_URL=http://localhost:5000/api/v1

SESSION_SECRET=

ASSET_STORAGE_PROVIDER=
ASSET_STORAGE_BUCKET=
ASSET_STORAGE_ACCESS_KEY=
ASSET_STORAGE_SECRET_KEY=
```

Additional authentication, cookie, and asset-storage variables may be added when required by the chosen providers.

Rules:

* Never commit actual secrets.
* Never place the Gemini API key in frontend environment variables.
* Validate required configuration at application startup.
* Fail with a clear configuration error if required values are missing.
* Document where each variable is used.
* Do not log secret values.
* Do not make the asset-storage provider mandatory for development if the application can safely use local development assets.

The final `.env.example` MUST match the implemented configuration.

---

# 16. ERROR HANDLING

Use a consistent error structure.

Example:

{
"success": false,
"error": {
"code": "INVALID_REQUEST",
"message": "Please check your input.",
"details": []
}
}

Required error categories include:

* `INVALID_REQUEST`
* `UNAUTHENTICATED`
* `FORBIDDEN`
* `RESOURCE_NOT_FOUND`
* `RATE_LIMITED`
* `GENERATION_FAILED`
* `GENERATION_TIMEOUT`
* `INVALID_AI_OUTPUT`
* `CASE_NOT_PLAYABLE`
* `INVALID_ACCUSATION`
* `INVESTIGATION_ALREADY_COMPLETED`
* `DATABASE_ERROR`
* `INTERNAL_SERVER_ERROR`

Do not expose internal prompts, database queries, API keys, or stack traces.

Log operational errors on the server with a request ID where appropriate.

---

# 17. SECURITY AND TRUST BOUNDARIES

The canonical solution is the application's most sensitive gameplay data.

The following rules are mandatory.

## 17.1 Solution Protection

* Store the canonical solution on the server.
* Never include it in the initial case response.
* Never include it in ordinary investigation progress responses.
* Never include it in evidence detail responses.
* Never include it in public case listings.
* Reveal it only after an authorized final submission or explicit reveal action.
* Never trust a frontend-supplied answer or score.

## 17.2 Authorization

Every private resource request MUST verify ownership.

Knowing an investigation ID MUST NOT be sufficient to access another user's investigation.

## 17.3 AI Safety

* User story input is untrusted.
* AI output is untrusted until validated.
* AI-generated evidence MUST NOT automatically execute code or scripts.
* Generated HTML MUST be sanitized or avoided.
* Generated asset URLs MUST be validated.
* External image URLs MUST NOT be fetched by the server without appropriate safeguards.
* The system MUST protect against prompt injection and resource-exhaustion attempts.

## 17.4 Fictional Evidence

The interface MUST communicate that the investigation and its evidence are fictional.

Generated CCTV and chat interfaces MUST NOT imply that the media came from actual surveillance systems or real private conversations.

The application MUST NOT use real individuals as fictional criminal suspects in a way that presents unsupported allegations about them.

---

# 18. TESTING STRATEGY

Testing is mandatory.

## 18.1 Unit Tests

Test:

* Request validation.
* Case schema validation.
* Suspect reference validation.
* Evidence reference validation.
* Canonical solution validation.
* Score calculation.
* Accusation evaluation.
* Authorization helpers.
* Error serialization.
* Input normalization.

## 18.2 Integration Tests

Test:

* Registration and login.
* Protected routes.
* MongoDB persistence.
* Case creation.
* AI service failure handling.
* Generation job status.
* Investigation creation.
* Progress persistence.
* Notes persistence.
* Final accusation.
* Result retrieval.
* Account deletion.
* Cross-user authorization attempts.

Use a mocked Gemini client for deterministic tests.

Tests MUST NOT require a real paid Gemini request by default.

## 18.3 End-to-End Tests

Test the following full workflow:

1. Register a new account.
2. Log in.
3. Create a mystery.
4. Wait for generation to finish.
5. Open the investigation.
6. Review suspects.
7. Open evidence.
8. Add investigation notes.
9. Refresh the page.
10. Verify that progress is preserved.
11. Submit an accusation.
12. Verify the result.
13. Open investigation history.
14. Verify that the completed case appears.

## 18.4 Security Tests

Verify that:

* Anonymous users cannot access protected resources.
* User A cannot read User B's investigation.
* User A cannot modify User B's notes.
* Private solutions do not appear in public API responses.
* Invalid suspect IDs are rejected.
* Duplicate submissions do not create duplicate results.
* Malformed AI responses are rejected.
* Request-size limits are enforced.
* Rate limiting works.
* Secrets are absent from frontend bundles.

## 18.5 Acceptance Requirement

A feature MUST NOT be considered complete merely because its page renders.

It must satisfy its functional requirements, validation rules, error handling, persistence requirements, and relevant automated tests.

---

# 19. DEVELOPMENT PHASES

Codex MUST implement the project incrementally.

## Phase 0: Specification and Planning

Tasks:

* Read the entire specification.
* Establish the repository structure.
* Create a requirements checklist.
* Identify unresolved decisions.
* Create a traceability matrix.
* Record implementation decisions in `specs/DECISIONS.md`.

Deliverable:

A documented implementation plan aligned with this specification.

## Phase 1: Foundation

Tasks:

* Initialize the monorepo.
* Configure TypeScript.
* Configure React and Vite.
* Configure Express.
* Connect MongoDB.
* Add environment validation.
* Add shared error handling.
* Add health-check endpoint.
* Configure linting and testing.
* Establish local development scripts.

Acceptance criteria:

* Frontend starts successfully.
* Backend starts successfully.
* MongoDB connection can be verified.
* Health check works.
* Configuration errors are handled clearly.
* No real API keys are committed.

## Phase 2: Authentication and Dashboard

Tasks:

* Implement registration.
* Implement login and logout.
* Implement session verification.
* Implement protected routes.
* Build dashboard.
* Build empty states.
* Build investigation history UI.

Acceptance criteria:

* Users can register and log in.
* Protected endpoints enforce authentication.
* User data is isolated.
* Dashboard statistics come from persisted records.

## Phase 3: AI Mystery Generation

Tasks:

* Integrate Gemini.
* Define the versioned case schema.
* Implement generation jobs.
* Implement validation.
* Implement consistency checks.
* Add retry handling.
* Persist validated cases.
* Protect the canonical solution.

Acceptance criteria:

* A valid user scenario can generate a playable case.
* Invalid output is rejected.
* Generation failures are recoverable.
* Public case responses exclude private solution data.
* Generated references remain consistent.

## Phase 4: Investigation Room

Tasks:

* Build suspect profiles.
* Build evidence cards.
* Build chat evidence viewer.
* Build image evidence viewer.
* Build simulated CCTV viewer.
* Build witness statements.
* Build timeline.
* Build notes.
* Build bookmarks.
* Implement progress persistence.

Acceptance criteria:

* Users can investigate a saved case.
* Evidence can be revisited.
* Notes survive refreshes.
* The investigation works on mobile and desktop.
* The solution remains private.

## Phase 5: Accusation and Results

Tasks:

* Build accusation screen.
* Implement server-side evaluation.
* Implement score calculation.
* Implement result persistence.
* Build results page.
* Update investigation history.

Acceptance criteria:

* Invalid accusations are rejected.
* Correctness is determined server-side.
* A valid accusation produces a persisted result.
* The solution is revealed only at the authorized stage.
* Duplicate submissions are handled safely.

## Phase 6: Hardening and Deployment

Tasks:

* Complete automated tests.
* Review authorization.
* Review solution leakage.
* Add rate limiting.
* Optimize performance.
* Verify accessibility.
* Configure production environment variables.
* Configure deployment.
* Test production database connectivity.
* Document deployment and rollback procedures.

Acceptance criteria:

* Required tests pass.
* No critical authorization defects remain.
* Secrets are protected.
* The production application can complete the full investigation workflow.
* Deployment and setup instructions are accurate.

---

# 20. DEFINITION OF DONE

A feature is complete only when:

* Its behavior matches this specification.
* Its input is validated.
* Its authorization is implemented.
* Its loading and error states exist.
* Its data is persisted when required.
* Its tests pass.
* Its UI is responsive.
* Its accessibility has been considered.
* Its documentation is updated.
* Its implementation does not expose the canonical solution.
* Its code follows the established project architecture.

A release is complete only when the complete user journey works end to end.

---

# 21. CODEX DEVELOPMENT RULES

Codex MUST follow these rules throughout development.

### Rule 1: Read the specification first

Before implementing any feature, read `specs/SPEC.md` and the relevant supporting specifications.

### Rule 2: Treat the specification as authoritative

Do not silently invent product behavior that conflicts with this document.

### Rule 3: Work in small increments

Implement one logical feature at a time.

Do not generate the entire application in one uncontrolled pass.

### Rule 4: Test after each phase

Run the relevant tests and fix failures before proceeding.

### Rule 5: Preserve working features

Do not rewrite stable components unnecessarily when implementing a new feature.

### Rule 6: Validate all AI output

Never assume that Gemini will always return valid JSON, consistent references, or correct facts.

### Rule 7: Protect the solution

Never expose private solution fields through a general-purpose case serializer.

### Rule 8: Avoid fake functionality

Do not mark a feature as implemented if it only contains a placeholder that cannot perform the specified action.

Clearly distinguish implemented features, temporary development mocks, and deferred features.

### Rule 9: Document deviations

If a requirement cannot be implemented as written, document the reason and propose a change before altering the specification.

### Rule 10: Update the documentation

Changes to APIs, models, configuration, and behavior MUST be reflected in the relevant specification files.

### Rule 11: Verify before claiming completion

Run the relevant checks and report the actual results.

Do not claim that tests passed if they were not executed.

### Rule 12: Maintain traceability

Every major requirement MUST map to at least one implementation task and one acceptance test.

---

# 22. CHANGE MANAGEMENT

This document is the project's Single Source of Truth.

Changes MUST follow this process:

1. Identify the requirement that needs to change.
2. Explain why the change is needed.
3. Identify affected components.
4. Identify affected database models and APIs.
5. Identify affected tests.
6. Update the specification.
7. Record significant decisions in `specs/DECISIONS.md`.
8. Implement the approved change.
9. Update and run the relevant tests.

Do not leave contradictory requirements in different documents.

If a supporting document conflicts with `specs/SPEC.md`, resolve the conflict and update the affected documents.

No undocumented architectural change should be treated as an approved product requirement.

---

# 23. FINAL ACCEPTANCE CHECKLIST

The MVP is acceptable when every mandatory item below is satisfied.

## Product

* [ ] Landing page is complete.
* [ ] Authentication works.
* [ ] Dashboard works.
* [ ] Users can create mysteries.
* [ ] AI generates playable cases.
* [ ] Suspects and evidence are available.
* [ ] Chat evidence works.
* [ ] Image evidence works or uses the defined fallback.
* [ ] Simulated CCTV works.
* [ ] Witness statements work.
* [ ] Timeline works.
* [ ] Notes and bookmarks work.
* [ ] Investigation progress persists.
* [ ] Users can submit a final accusation.
* [ ] Results explain the solution.
* [ ] Investigation history works.

## Backend

* [ ] MongoDB models are implemented.
* [ ] API contracts are documented.
* [ ] Input validation works.
* [ ] Authorization works.
* [ ] AI generation is validated.
* [ ] Canonical solution protection is implemented.
* [ ] Scoring occurs on the backend.
* [ ] Error handling is consistent.
* [ ] Rate limiting is configured.
* [ ] Generation failures are recoverable.

## Frontend

* [ ] All required routes work.
* [ ] Loading states work.
* [ ] Error states work.
* [ ] Forms are validated.
* [ ] Mobile layout works.
* [ ] Keyboard navigation works.
* [ ] Solution data is not exposed in client responses.
* [ ] No mandatory feature relies on a nonfunctional placeholder.

## Quality

* [ ] Unit tests pass.
* [ ] Integration tests pass.
* [ ] End-to-end investigation workflow passes.
* [ ] Authorization tests pass.
* [ ] Production configuration is documented.
* [ ] Environment variables are documented.
* [ ] Setup instructions are accurate.
* [ ] Deployment instructions are accurate.
* [ ] No unresolved critical security defects remain.

---

# 24. FINAL PRODUCT DEFINITION

AI Mystery Room is a full-stack, AI-powered fictional investigation platform built using the MERN stack and Google Gemini.

Its defining capability is transforming a short user-provided story into a coherent, interactive detective investigation containing fictional suspects, interconnected clues, simulated conversations, images, CCTV-style evidence, witness statements, timelines, and a hidden canonical solution.

Users investigate the case, select the culprit, and receive a result based on the evidence.

The backend is responsible for generating and validating mysteries, protecting the canonical solution, managing investigation state, evaluating accusations, and persisting results.

The frontend is responsible for presenting an immersive and accessible investigation experience.

The application MUST prioritize coherent mysteries, fair clue design, reliable AI generation, strong security, maintainable architecture, and a complete end-to-end user journey.

**This specification is the authoritative baseline for implementation. All mandatory requirements must be implemented and tested unless an approved specification change explicitly modifies them.**
