const operations = [
	{
		id: 0,
		theater: 0,
		patientName: 'Eivind',
		plannedStartTime: '2017-09-20 14:00',
		plannedEndTime: '2017-09-20 14:40',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 14:37',
				end: '2017-09-20 14:53'
			},
			{
				name: 'pretime',
				start: '2017-09-20 14:55',
				end: '2017-09-20 15:01'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 15:03',
				end: '2017-09-20 15:18'
			},
			{
				name: 'posttime',
				start: '2017-09-20 15:19',
				end: '2017-09-20 15:22'
			},
			{
				name: 'postop',
				start: '2017-09-20 15:23',
				end: '2017-09-20 15:37'
			}
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 15:11',
		arrivalTime: '2017-09-20 14:11',
		surgeonTime: 15,
		patientBirthDate: '1957-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med\n generalisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt\n med generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\nDETTE ER TELST 2\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ikke info om symptomer i det siste, \nnormal EKG og klinisk noe ved innkomst.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 1,
		theater: 0,
		patientName: 'Felix',
		plannedStartTime: '2017-09-20 10:27',
		plannedEndTime: '2017-09-20 11:05',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 10:21',
				end: '2017-09-20 10:51'
			},
			{
				name: 'pretime',
				start: '2017-09-20 11:01',
				end: '2017-09-20 11:10'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 11:12',
				end: '2017-09-20 11:34'
			},
			{
				name: 'posttime',
				start: '2017-09-20 11:35',
				end: '2017-09-20 11:38'
			},
			{
				name: 'postop',
				start: '2017-09-20 11:38',
				end: '2017-09-20 11:58'
			}
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2017-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt med \ngeneralisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før kl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 2,
		theater: 1,
		patientName: 'Nina',
		plannedStartTime: '2017-09-20 14:50',
		plannedEndTime: '2017-09-20 16:25',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 14:49',
				end: '2017-09-20 15:02'
			},
			{
				name: 'pretime',
				start: '2017-09-20 15:02',
				end: '2017-09-20 15:13'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 15:13',
				end: '2017-09-20 15:59'
			},
			{
				name: 'posttime',
				start: '2017-09-20 15:59',
				end: '2017-09-20 16:06'
			},
			{
				name: 'postop',
				start: '2017-09-20 16:07',
				end: '2017-09-20 16:13'
			}
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt \nmed generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før kl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 3,
		theater: 1,
		patientName: 'Fredrik',
		plannedStartTime: '2017-09-20 08:00',
		plannedEndTime: '2017-09-20 09:30',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 08:11',
				end: '2017-09-20 08:43'
			},
			{
				name: 'pretime',
				start: '2017-09-20 08:43',
				end: '2017-09-20 09:00'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 09:02',
				end: '2017-09-20 09:34'
			},
			{
				name: 'posttime',
				start: '2017-09-20 09:36',
				end: '2017-09-20 09:45'
			},
			{
				name: 'postop',
				start: '2017-09-20 09:50',
				end: '2017-09-20 10:00'
			}
		]
	},
	{
		id: 4,
		theater: 2,
		patientName: 'Jenny',
		plannedStartTime: '2017-09-20 09:20',
		plannedEndTime: '2017-09-20 10:20',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 09:30',
				end: '2017-09-20 09:43'
			},
			{
				name: 'pretime',
				start: '2017-09-20 09:43',
				end: '2017-09-20 09:48'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 09:48',
				end: '2017-09-20 10:00'
			},
			{
				name: 'posttime',
				start: '2017-09-20 10:01',
				end: '2017-09-20 10:10'
			},
			{
				name: 'postop',
				start: '2017-09-20 10:11',
				end: '2017-09-20 10:23'
			}
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 12:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2017-07-16',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt med\n generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før kl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 5,
		theater: 2,
		patientName: 'Svenn-Helge',
		plannedStartTime: '2017-09-20 10:30',
		plannedEndTime: '2017-09-20 12:00',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 10:05',
				end: '2017-09-20 10:50'
			},
			{
				name: 'pretime',
				start: '2017-09-20 10:52',
				end: '2017-09-20 11:15'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 11:18',
				end: '2017-09-20 11:40'
			},
			{
				name: 'posttime',
				start: '2017-09-20 11:41',
				end: '2017-09-20 11:48'
			},
			{
				name: 'postop',
				start: '2017-09-20 11:48',
				end: '2017-09-20 11:58'
			}
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-15 13:11',
		arrivalTime: '2017-09-17 14:11',
		surgeonTime: 15,
		patientBirthDate: '1987-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt \nmed generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før \nkl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 6,
		theater: 2,
		plannedStartTime: '2017-09-20 15:00',
		plannedEndTime: '2017-09-20 16:50',
		patientName: 'Magnus',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 15:11',
				end: '2017-09-20 15:23'
			},
			{
				name: 'pretime',
				start: '2017-09-20 15:24',
				end: '2017-09-20 15:38'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 15:45',
				end: '2017-09-20 16:15'
			},
			{
				name: 'posttime',
				start: '2017-09-20 16:15',
				end: '2017-09-20 16:20'
			},
			{
				name: 'postop',
				start: '2017-09-20 16:22',
				end: '2017-09-20 16:35'
			}
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 15:30',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '1982-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt \nmed generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før\n kl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 7,
		theater: 3,
		plannedStartTime: '2017-09-20 14:00',
		plannedEndTime: '2017-09-20 15:20',
		patientName: 'Letizia',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 14:05',
				end: '2017-09-20 14:20'
			},
			{
				name: 'pretime',
				start: '2017-09-20 14:20',
				end: '2017-09-20 14:31'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 14:33',
				end: '2017-09-20 14:45'
			},
			{
				name: 'posttime',
				start: '2017-09-20 14:45',
				end: '2017-09-20 15:05'
			},
			{
				name: 'postop',
				start: '2017-09-20 15:06',
				end: '2017-09-20 15:30'
			},
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 11:11',
		arrivalTime: '2017-09-19 15:11',
		surgeonTime: 15,
		patientBirthDate: '2001-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt \nmed generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før \nkl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 8,
		theater: 4,
		plannedStartTime: '2017-09-20 13:00',
		plannedEndTime: '2017-09-20 13:58',
		patientName: 'Tor',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 13:07',
				end: '2017-09-20 13:20'
			},
			{
				name: 'pretime',
				start: '2017-09-20 13:20',
				end: '2017-09-20 13:46'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 13:48',
				end: '2017-09-20 14:11'
			},
			{
				name: 'posttime',
				start: '2017-09-20 14:15',
				end: '2017-09-20 14:31'
			},
			{
				name: 'postop',
				start: '2017-09-20 14:34',
				end: '2017-09-20 14:47'
			},
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '1987-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt \nmed generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før\n kl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-09-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 9,
		theater: 4,
		plannedStartTime: '2017-10-20 13:00',
		plannedEndTime: '2017-10-20 13:58',
		patientName: 'Ellen',
		phases: [
			{
				name: 'preparation',
				start: '2017-10-20 13:07',
				end: '2017-10-20 13:20'
			},
			{
				name: 'pretime',
				start: '2017-10-20 13:20',
				end: '2017-10-20 13:46'
			},
			{
				name: 'knifetime',
				start: '2017-10-20 13:48',
			},
			{
				name: 'posttime'
			},
			{
				name: 'postop'
			},
		],
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'JSJ', fullName: 'Jenny Stange Johansen', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Jenny Stange Johansen',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'KB2',
		operatingDate: '2017-10-20 17:11',
		arrivalTime: '2017-10-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '1987-09-20',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Akutt appendisitt med \ngeneralisert peritonitt',
		procedureTypeFreeText: 'Kutt kutt appendisitt \nmed generalisert peritonitt',
		equipment: ['Skalpell', 'Hansker', 'Frakk'],
		tils: 'T',
		priority: 2,
		messageFromBedWard: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
		fasting: 'fra 14',
		position: 'sideleie',
		anesthesiaCode: 1234,
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ingen anestesi før\n kl 16',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet',
		propolDate: '2017-10-20 17:00',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16'
	}
]

export const operationPhases = {
	preparation: {
		color: '#C6E0FF'
	},
	pretime: {
		color: '#9CCE63'
	},
	knifetime: {
		color: '#6B8E23'
	},
	posttime: {
		color: '#316300'
	},
	postop: {
		color: '#C6E0FF'
	}
}

export default operations