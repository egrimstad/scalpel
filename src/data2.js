
const data = [{
	"OperationId": 14867,
	"TheaterId": 4,
	"OperatingDate": "2017-10-02T00:00:00",
	"ArrivalTime": null,
	"StartTime": "2017-10-02T08:00:01",
	"IsStartTimeGenerated": true,
	"EndTime": null,
	"SurgeonTime": 0,
	"TimeMatrixId": null,
	"OperationStatus": 2,
	"PasGroupId": 3,
	"CareUnitName": "KB2", //Enhet
	"Priority": null,
	"PatientName": "Opplan4, Grete", //Navn
	"DiagnoseTypeFreeText": "Akutt appendisitt med generalisert peritonitt", //Diagnose
	"ProcedureTypeFreeText": "", //Inngrep
	"PatientBirthDate": "1945-02-02T00:00:00",  //Born
	"NumberOfBloodUnits": null,  //Blod?
	"AsaScore": null,                 //ASA
	"Crew": [], //Personell
	"OperationEvents": [{
		"OperationEventId": 47620,
		"OperationId": 14867,
		"EventType": 39,
		"EventName": "Har ikke hatt tilsyn",
		"EventDateTime": "2017-10-02T05:36:44.653",
		"InputDateTime": "2017-10-02T05:36:44.653",
		"Employee": null,
		"OnBehalfOf": null,
		"OperationCrewMember": null,
		"RegisteredBy": {
			"EmployeeId": 7,
			"Name": "Marius Moholdt",
			"Initials": "MAMO",
			"TitleType": 6,
			"Title": "Anestesisykepleier",
			"PersonId": 3887,
			"IsPrivileged": false,
			"IsAutoRegistered": false,
			"EmployeePasGroupLinks": null,
			"IsInactive": false
		},
		"EventDelayId": null,
		"Comment": null,
		"SkipRecordHistory": false
	}, {
		"OperationEventId": 47619,
		"OperationId": 14867,
		"EventType": 31,
		"EventName": "Opprettet",
		"EventDateTime": "2017-10-02T05:36:44.64Z",
		"InputDateTime": "2017-10-02T05:36:44.64",
		"Employee": null,
		"OnBehalfOf": null,
		"OperationCrewMember": null,
		"RegisteredBy": {
			"EmployeeId": 7,
			"Name": "Marius Moholdt",
			"Initials": "MAMO",
			"TitleType": 6,
			"Title": "Anestesisykepleier",
			"PersonId": 3887,
			"IsPrivileged": false,
			"IsAutoRegistered": false,
			"EmployeePasGroupLinks": null,
			"IsInactive": false
		},
		"EventDelayId": null,
		"Comment": null,
		"SkipRecordHistory": false
	}],
	"IsTentativeOperation": false,
	"IsContaminationDanger": false,
	"Urgency": 0,
	"UrgencyDate": null,
	"UrgencyPriority": null,
	"HasNotification": false,
	"InternalOrder": 0,
	"PreVisitStatus": "T",
	"AnesthesiaCodeId": null,
	"PrePolyclinicDate": null,
	"FirstPostponementDate": null,
	"NumberOfPostponements": 0,
	"LastPostponementCause": null,
	"TreatmentDeadlineDate": "2013-09-01T00:00:00",
	"PlannedHospitalization": "2014-05-06T00:00:00",
	"MessageFromBedWard": null,
	"WaitingListId": "60000630|3",
	"IsAnonymous": false,
	"CriticalDate": "2013-08-30T00:00:00",
	"ContactId": null,
	"UserName": null,
	"FreshId": 104289,
	"PrePoliclinicResponsibleName": null,
	"IsMovedFromExternal": false,
	"IsExclusiveLocked": false,
	"OperationalUnitId": 107455,
	"ExclusiveLockInfo": null,
	"IsDaytimeSurgery": false,
	"CancellationInfo": null,
	"PasId": 60000630,
	"HasCancellationToday": false,
	"ScheduledStatus": 3,
	"ScheduledStatusTime": "2017-10-02T05:36:44.64Z",
	"IsSafeSurgery": false,
	"AnesthesiaCodeName": null,
	"LastPostponementCauseDescription": null,
	"ProcedureTypeId": "",
	"HospitalCode": "TR",
	"PasDeptNo": null,
	"FreshOrganizationalUnitName": "Kirurgisk klinikk",
	"ReceivedDate": "2013-08-08T00:00:00",
	"Examination": null,
	"ApplicationComment": "DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n",
	"PlanningComment": null,
	"PostalCode": "6103",
	"PostalPlace": "Volda",
	"PlannedInDate": "2014-05-06T00:00:00",
	"IsSafeSurgeryFirstCheck": null,
	"OfficialId": "02024500201",
	"IsSafeSurgerySecondCheck": null,
	"AssociatedPrePoliclinicEntityCount": 0,
	"IsSafeSurgeryThirdCheck": null,
	"IncludedByPreviousDay": false,
	"IsSensitive": null
}]

function getOperationById(id)
{
	const operations = data.filter(operation => operation["OperationId"] === id)
	return operations.length > 0 ? operations[0] : undefined
}

export {getOperationById}