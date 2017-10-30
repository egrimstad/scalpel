const operations = [
	{
		id: 0,
		theater: 0,
		// As per the documentation, preparation is calcluated given a start time, 
		// pre-/post time (in minutes) (from a drop down) and knife time (in minutes)
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 14:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				end: '2017-10-22 15:40',
				duration: 10
			}
		],
		patientName: 'Christian Olsen',
		plannedStartTime: '2017-10-22 14:00',
		plannedEndTime: '2017-10-22 14:40',
		phases: [
			{
				id: 0,
				start: '2017-10-22 14:37',
				end: '2017-10-22 14:53'
			},
			{
				id: 1,
				start: '2017-10-22 14:55',
				end: '2017-10-22 15:01'
			},
			{
				id: 2,
				start: '2017-10-22 15:03',
				end: '2017-10-22 15:18'
			},
			{
				id: 3,
				start: '2017-10-22 15:19',
				end: '2017-10-22 15:22'
			},
			{
				id: 4,
				start: '2017-10-22 15:23',
				end: '2017-10-22 15:37'
			}
		],
		start: '2017-10-22 14:37',
		end: '2017-10-22 15:37',
		crew: [
			{initials: 'AB', fullName: 'Aurora Bentsen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EG', fullName: 'Erik Grønvold', phone: '+4712345678', position: 'assistant1'},
			{initials: 'RM', fullName: 'Robin Moan', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Aurora Bentsen',
		assistant1: 'Erik Grønvold',
		assistant2: 'Robin Moan',
		careUnitName: 'KB2',
		operatingDate: '2017-10-22 15:11',
		arrivalTime: '2017-10-22 14:11',
		surgeonTime: 15,
		patientBirthDate: '1957-10-22',
		bloodType: 'B',
		asa: 2,
		diagnoseTypeFreeText: 'FCF sin',
		procedureTypeFreeText: 'Hemiprotese sin',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'A',
		priority: 2,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nOppmøte 15.15 2\n',
		medicalInformation: '',
		fasting: '',
		position: 'Ryggleie',
		anesthesiaCode: 'Sp',
		noAnesthesia: true,
		trauma: true,
		thrombosisProphylaxis: false,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 160,
		weight: 65,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22105749992'
	},
	{
		id: 1,
		theater: 0,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 10:27',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				end: '2017-10-22 12:07',
				duration: 10
			}
		],
		patientName: 'Asbjørg Mong',
		plannedStartTime: '2017-10-22 10:27',
		plannedEndTime: '2017-10-22 11:05',
		phases: [
			{
				id: 0,
				start: '2017-10-22 10:21',
				end: '2017-10-22 10:51'
			},
			{
				id: 1,
				start: '2017-10-22 11:01',
				end: '2017-10-22 11:10'
			},
			{
				id: 2,
				start: '2017-10-22 11:12',
				end: '2017-10-22 11:34'
			},
			{
				id: 3,
				start: '2017-10-22 11:35',
				end: '2017-10-22 11:38'
			},
			{
				id: 4,
				start: '2017-10-22 11:38',
				end: '2017-10-22 11:58'
			}
		],
		start: '2017-10-22 10:21',
		end: '2017-10-22 11:58',
		crew: [
			{initials: 'EG', fullName: 'Eldar Gjervik', phone: '+4712345678', position: 'kirurg'},
			{initials: 'TN', fullName: 'Thomas Nygård', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Eldar Gjervik',
		assistant1: 'Thomas Nygård',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'OFS',
		operatingDate: '2017-10-22 17:11',
		arrivalTime: '2017-10-22 15:11',
		surgeonTime: 15,
		patientBirthDate: '1995-10-22',
		bloodType: 'AB',
		asa: 3,
		diagnoseTypeFreeText: 'Arr abdomen',
		procedureTypeFreeText: 'Arrkorreksjon',
		equipment: 'Botox',
		tils: '',
		priority: 3,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: '3t før op',
		position: 'Mageleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: true,
		surveillance: true,
		anesthesiaInformation: 'Ikke info om symptomer i det siste, \nnormal EKG og klinisk noe ved innkomst.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 159,
		weight: 50,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22109549492'
	},
	{
		id: 2,
		theater: 1,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 14:50',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 16:30'
			}
		],
		patientName: 'Maria Johansen',
		plannedStartTime: '2017-10-22 14:50',
		plannedEndTime: '2017-10-22 16:25',
		phases: [
			{
				id: 0,
				start: '2017-10-22 14:49',
				end: '2017-10-22 15:02'
			},
			{
				id: 1,
				start: '2017-10-22 15:02',
				end: '2017-10-22 15:13'
			},
			{
				id: 2,
				start: '2017-10-22 15:13',
				end: '2017-10-22 15:59'
			},
			{
				id: 3,
				start: '2017-10-22 15:59',
				end: '2017-10-22 16:06'
			},
			{
				id: 4,
				start: '2017-10-22 16:07',
				end: '2017-10-22 16:13'
			}
		],
		start: '2017-10-22 14:49',
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EG', fullName: 'Eldar Gjervik', phone: '+4712345678', position: 'assistant1'},
			{initials: 'TN', fullName: 'Thomas Nygård', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Eldar Gjervik',
		assistant2: 'Thomas Nygård',
		careUnitName: 'OTDP',
		operatingDate: '2017-10-22 17:11',
		arrivalTime: '2017-10-22 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-10-22',
		bloodType: 'O',
		asa: 1,
		diagnoseTypeFreeText: 'Meniskskade',
		procedureTypeFreeText: 'Artroskopi venstre kne, meniskreseksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'a',
		priority: 2,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: 'Bruker ingen medisiner\r\nregelmessig\r\n',
		fasting: '-',
		position: 'Sideleie',
		anesthesiaCode: 'N/Epi',
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
		propolDate: '2017-10-22',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 170,
		weight: 62,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22100549292'
	},
	{
		id: 3,
		theater: 1,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 08:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 09:40'
			}
		],
		patientName: 'Asle Seim',
		plannedStartTime: '2017-10-22 08:00',
		plannedEndTime: '2017-10-22 09:30',
		phases: [
			{
				id: 0,
				start: '2017-10-22 08:11',
				end: '2017-10-22 08:43'
			},
			{
				id: 1,
				start: '2017-10-22 08:43',
				end: '2017-10-22 09:00'
			},
			{
				id: 2,
				start: '2017-10-22 09:02',
				end: '2017-10-22 09:34'
			},
			{
				id: 3,
				start: '2017-10-22 09:36',
				end: '2017-10-22 09:45'
			},
			{
				id: 4,
				start: '2017-10-22 09:50',
				end: '2017-10-22 10:00'
			}
		],
		start: '2017-10-22 08:11',
		end: '2017-10-22 10:00',
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EG', fullName: 'Eldar Gjervik', phone: '+4712345678', position: 'assistant1'},
			{initials: 'TN', fullName: 'Thomas Nygård', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Eldar Gjervik',
		assistant2: 'Thomas Nygård',
		careUnitName: 'OTDP',
		operatingDate: '2017-10-22 17:11',
		arrivalTime: '2017-10-22 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-10-22',
		bloodType: 'O',
		asa: 1,
		diagnoseTypeFreeText: 'Arr abdomen',
		procedureTypeFreeText: 'Arrkorreksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'a',
		priority: 2,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: '',
		fasting: '-',
		position: 'Sideleie',
		anesthesiaCode: 'N/Epi',
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
		propolDate: '2017-10-22',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 170,
		weight: 62,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22100549992'
	},
	{
		id: 4,
		theater: 2,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 09:20',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 11:00'
			}
		],
		patientName: 'Sarah Karlsen',
		plannedStartTime: '2017-10-22 09:20',
		plannedEndTime: '2017-10-22 10:20',
		phases: [
			{
				id: 0,
				start: '2017-10-22 09:30',
				end: '2017-10-22 09:43'
			},
			{
				id: 1,
				start: '2017-10-22 09:43',
				end: '2017-10-22 09:48'
			},
			{
				id: 2,
				start: '2017-10-22 09:48',
				end: '2017-10-22 10:00'
			},
			{
				id: 3,
				start: '2017-10-22 10:01',
				end: '2017-10-22 10:10'
			},
			{
				id: 4,
				start: '2017-10-22 10:11',
				end: '2017-10-22 10:23'
			}
		],
		start: '2017-10-22 09:30',
		end: '2017-10-22 10:23',
		crew: [
			{initials: 'ØI', fullName: 'Øyvind Iversen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'KK', fullName: 'Kaja Khan', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Øyvind Iversen',
		assistant1: 'Kaja Khan',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'ODP',
		operatingDate: '2017-10-22 12:11',
		arrivalTime: '2017-10-22 15:11',
		surgeonTime: 15,
		patientBirthDate: '1982-07-16',
		bloodType: 'A',
		asa: 1,
		diagnoseTypeFreeText: 'Fremmedlegme finger hø hånd',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: 'Botox',
		tils: 'S',
		priority: 1,
		messageFromBedWard: 'Ta INR v/ oppmøte DK\r\n',
		medicalInformation: 'Cave apocillin\r\n',
		fasting: 'Fått frokost',
		position: 'Ryggleie',
		anesthesiaCode: '',
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
		propolDate: '2017-10-22',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 190,
		weight: 100,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '16078249292'
	},
	{
		id: 5,
		theater: 2,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 10:30',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 12:10'
			}
		],
		patientName: 'Jarl Grøtte',
		plannedStartTime: '2017-10-22 10:30',
		plannedEndTime: '2017-10-22 12:00',
		phases: [
			{
				id: 0,
				start: '2017-10-22 10:05',
				end: '2017-10-22 10:50'
			},
			{
				id: 1,
				start: '2017-10-22 10:52',
				end: '2017-10-22 11:15'
			},
			{
				id: 2,
				start: '2017-10-22 11:18',
				end: '2017-10-22 11:40'
			},
			{
				id: 3,
				start: '2017-10-22 11:41',
				end: '2017-10-22 11:48'
			},
			{
				id: 4,
				start: '2017-10-22 11:48',
				end: '2017-10-22 11:58'
			}
		],
		start: '2017-10-22 10:05',
		end: '2017-10-22 11:58',
		crew: [
			{initials: 'KK', fullName: 'Kaja Khan', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EM', fullName: 'Erland Marstein', phone: '+4712345678', position: 'assistant1'},
			{initials: 'IL', fullName: 'Ida Larsen', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Kaja Khan',
		assistant1: 'Erland Marstein',
		assistant2: 'Ida Larsen',
		careUnitName: 'OPLDP',
		operatingDate: '2017-09-15 13:11',
		arrivalTime: '2017-09-17 14:11',
		surgeonTime: 15,
		patientBirthDate: '1987-10-22',
		bloodType: 'B',
		asa: 2,
		diagnoseTypeFreeText: 'Meniskskade',
		procedureTypeFreeText: 'Artroskopi venstre kne, meniskreseksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'P',
		priority: 2,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\nPlanlagt på Røros men flyttet\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: '',
		position: 'Ryggleie',
		anesthesiaCode: 'Plex',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Dement. Tidl alkohol. Sykehjemsboer.',
		anesthesiaCodeCoParacet: '1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749992'
	},
	{
		id: 6,
		theater: 2,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 15:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 16:40'
			}
		],
		plannedStartTime: '2017-10-22 15:00',
		plannedEndTime: '2017-10-22 16:50',
		patientName: 'Andreas Halvorsen',
		phases: [
			{
				id: 0,
				start: '2017-10-22 15:11',
				end: '2017-10-22 15:23'
			},
			{
				id: 1,
				start: '2017-10-22 15:24',
				end: '2017-10-22 15:38'
			},
			{
				id: 2,
				start: '2017-10-22 15:45',
				end: '2017-10-22 16:15'
			},
			{
				id: 3,
				start: '2017-10-22 16:15',
				end: '2017-10-22 16:20'
			},
			{
				id: 4,
				start: '2017-10-22 16:22',
				end: '2017-10-22 16:35'
			}
		],
		start: '2017-10-22 15:11',
		crew: [
			{initials: 'LS', fullName: 'Laila Selle', phone: '+4712345678', position: 'kirurg'},
			{initials: 'HW', fullName: 'Hans Westbye', phone: '+4712345678', position: 'assistant1'}],
		surgeon: 'Laila Selle',
		assistant1: 'Hans Westbye',
		assistant2: '',
		careUnitName: 'OFS',
		operatingDate: '2017-10-22 15:30',
		arrivalTime: '2017-10-22 15:11',
		surgeonTime: 15,
		patientBirthDate: '1982-10-22',
		bloodType: 'A',
		asa: 1,
		diagnoseTypeFreeText: 'Fremmedlegme finger hø hånd',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: '',
		tils: 'i',
		priority: 2,
		messageFromBedWard: 'Sengepost informert 5/10\r\n',
		medicalInformation: '',
		fasting: 'fra 14',
		position: 'Sideleie',
		anesthesiaCode: 'Sp',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: false,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Dement. Sykehjemsboer.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 180,
		weight: 90,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108249992'
	},
	{
		id: 7,
		theater: 3,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 14:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 15:40'
			}
		],
		plannedStartTime: '2017-10-22 14:00',
		plannedEndTime: '2017-10-22 15:20',
		patientName: 'Lillian Andersen',
		phases: [
			{
				id: 0,
				start: '2017-10-22 14:05',
				end: '2017-10-22 14:20'
			},
			{
				id: 1,
				start: '2017-10-22 14:20',
				end: '2017-10-22 14:31'
			},
			{
				id: 2,
				start: '2017-10-22 14:33',
				end: '2017-10-22 14:45'
			},
			{
				id: 3,
				start: '2017-10-22 14:45',
				end: '2017-10-22 15:05'
			},
			{
				id: 4,
				start: '2017-10-22 15:06',
				end: '2017-10-22 15:30'
			},
		],
		start: '2017-10-22 14:05',
		end: '2017-10-22 15:30',
		crew: [
			{initials: 'HT', fullName: 'Heidi Tollefsen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'KT', fullName: 'Kåre Tveit', phone: '+4712345678', position: 'assistant1'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Kåre Tveit',
		assistant2: '',
		careUnitName: 'OFS',
		operatingDate: '2017-10-22 11:11',
		arrivalTime: '2017-09-19 15:11',
		surgeonTime: 15,
		patientBirthDate: '2001-10-22',
		bloodType: 'O',
		asa: 4,
		diagnoseTypeFreeText: 'Coxartrose sin',
		procedureTypeFreeText: 'Hofteprotese',
		equipment: 'Explant 52/28, polarkopp, 28mm hode til Securos stamme',
		tils: 'a',
		priority: 2,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\nPlanlagt på Røros men flyttet\r\n',
		medicalInformation: '',
		fasting: 'fra 14',
		position: 'Mageleie',
		anesthesiaCode: 'N/Epi',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. \nTannprotese. Nakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 122,
		weight: 50,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22100149692'
	},
	{
		id: 8,
		theater: 4,
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-22 13:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2017-10-22 14:40'
			}
		],
		plannedStartTime: '2017-10-22 13:00',
		plannedEndTime: '2017-10-22 13:58',
		patientName: 'Hannah Wilhelmsen',
		phases: [
			{
				id: 0,
				start: '2017-10-22 13:07',
				end: '2017-10-22 13:20'
			},
			{
				id: 1,
				start: '2017-10-22 13:20',
				end: '2017-10-22 13:46'
			},
			{
				id: 2,
				start: '2017-10-22 13:48',
				end: '2017-10-22 14:11'
			},
			{
				id: 3,
				start: '2017-10-22 14:15',
				end: '2017-10-22 14:31'
			},
			{
				id: 4,
				start: '2017-10-22 14:34',
				end: '2017-10-22 14:47'
			},
		],
		start: '2017-10-22 13:07',
		end: '2017-10-22 14:47',
		crew: [
			{initials: 'KT', fullName: 'Kåre Tveit', phone: '+4712345678', position: 'kirurg'}],
		surgeon: 'Kåre Tveit',
		assistant1: '',
		assistant2: '',
		careUnitName: 'OTDP',
		operatingDate: '2017-10-22 17:11',
		arrivalTime: '2017-10-22 15:11',
		surgeonTime: 10,
		patientBirthDate: '1987-10-22',
		bloodType: 'O',
		asa: 1,
		diagnoseTypeFreeText: 'Plica medialis',
		procedureTypeFreeText: 'Artroskopisk partiell synovectomi ve. kne',
		equipment: 'Botox',
		tils: 'A',
		priority: 1,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\n\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: 'Etter frokost kl 9',
		position: 'Ryggleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749692'
	},
	{
		id: 9,
		theater: 4,
		patientName: 'Ellen Skien',
		plannedPhases: [
			{
				id: 0,
				start: '2017-10-23 13:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10
			}
		],
		phases: [
			{
				id: 0,
				start: '2017-10-23 13:07',
				end: '2017-10-23 13:20'
			},
			{
				id: 1,
				start: '2017-10-23 13:20',
				end: '2017-10-23 13:46'
			},
			{
				id: 2,
				start: '2017-10-23 13:48',
			},
			{
				id: 3
			},
			{
				id: 4
			},
		],
		start: '2017-10-23 13:07',
		end: '2017-10-23 13:48',
		crew: [
			{initials: 'HT', fullName: 'Heidi Tollefsen', phone: '+4793868562', position: 'kirurg'},
			{initials: 'KT', fullName: 'Kåre Tveit', phone: '+4712345678', position: 'assistant1'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Kåre Tveit',
		assistant2: '',
		careUnitName: 'KB2',
		operatingDate: '2017-10-23 17:11',
		arrivalTime: '2017-10-23 15:11',
		surgeonTime: 15,
		patientBirthDate: '1987-10-22',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Plica medialis',
		procedureTypeFreeText: 'Artroskopisk partiell synovectomi ve. kne',
		equipment: 'Botox',
		tils: 'A',
		priority: 1,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\n\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: 'Etter frokost kl 9',
		position: 'Ryggleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2017-10-22',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749092'
	}
]


export const planningPhases = [
	{
		id: 0,
		name: 'pretime',
		color: '#F9F9EE'
	},
	{
		id: 1,
		name: 'knifetime',
		color: '#DAD9C0'
	},
	{
		id: 2,
		name: 'posttime',
		color: '#F9F9EE'
	},
]

export const actualPhases = [
	{
		id: 0,
		name: 'forberedelse',
		color: '#C6E0FF'
	},
	{
		id: 1,
		name: 'pretid',
		color: '#9CCE63'
	},
	{
		id: 2,
		name: 'knivtid',
		color: '#6B8E23'
	},
	{
		id: 3,
		name: 'posttid',
		color: '#316300'
	},
	{
		id: 4,
		name: 'postop',
		color: '#C6E0FF'
	}
]

export default operations