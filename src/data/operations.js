const operations = [
	{
		id: 0,
		theater: 0,
		// As per the documentation, preparation is calcluated given a start time, 
		// pre-/post time (in minutes) (from a drop down) and knife time (in minutes)
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 14:00',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				end: '2017-09-20 15:40',
				duration: 10
			}
		],
		patientName: 'Christian Olsen',
		plannedStartTime: '2017-09-20 14:00',
		plannedEndTime: '2017-09-20 14:40',
		phases: [
			{
				id: 0,
				start: '2017-09-20 14:37',
				end: '2017-09-20 14:53'
			},
			{
				id: 1,
				start: '2017-09-20 14:55',
				end: '2017-09-20 15:01'
			},
			{
				id: 2,
				start: '2017-09-20 15:03',
				end: '2017-09-20 15:18'
			},
			{
				id: 3,
				start: '2017-09-20 15:19',
				end: '2017-09-20 15:22'
			},
			{
				id: 4,
				start: '2017-09-20 15:23',
				end: '2017-09-20 15:37'
			}
		],
		start: '2017-09-20 14:37',
		end: '2017-09-20 15:37',
		crew: [
			{initials: 'AB', fullName: 'Aurora Bentsen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EG', fullName: 'Erik Grønvold', phone: '+4712345678', position: 'assistant1'},
			{initials: 'RM', fullName: 'Robin Moan', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Aurora Bentsen',
		assistant1: 'Erik Grønvold',
		assistant2: 'Robin Moan',
		careUnitName: 'KB2',
		operatingDate: '2017-09-20 15:11',
		arrivalTime: '2017-09-20 14:11',
		surgeonTime: 15,
		patientBirthDate: '1957-09-20',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 160,
		weight: 65,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 1,
		theater: 0,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 10:27',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				end: '2017-09-20 12:07',
				duration: 10
			}
		],
		patientName: 'Asbjørg Mong',
		plannedStartTime: '2017-09-20 10:27',
		plannedEndTime: '2017-09-20 11:05',
		phases: [
			{
				id: 0,
				start: '2017-09-20 10:21',
				end: '2017-09-20 10:51'
			},
			{
				id: 1,
				start: '2017-09-20 11:01',
				end: '2017-09-20 11:10'
			},
			{
				id: 2,
				start: '2017-09-20 11:12',
				end: '2017-09-20 11:34'
			},
			{
				id: 3,
				start: '2017-09-20 11:35',
				end: '2017-09-20 11:38'
			},
			{
				id: 4,
				start: '2017-09-20 11:38',
				end: '2017-09-20 11:58'
			}
		],
		start: '2017-09-20 10:21',
		end: '2017-09-20 11:58',
		crew: [
			{initials: 'EG', fullName: 'Eldar Gjervik', phone: '+4712345678', position: 'kirurg'},
			{initials: 'TN', fullName: 'Thomas Nygård', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Eldar Gjervik',
		assistant1: 'Thomas Nygård',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'OFS',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2017-09-20',
		bloodType: 'AB',
		asa: 3,
		diagnoseTypeFreeText: 'Arr abdomen',
		procedureTypeFreeText: 'Arrkorreksjon',
		equipment: 'Botox',
		tils: '',
		priority: 3,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 159,
		weight: 50,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 2,
		theater: 1,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 14:50',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 16:30'
			}
		],
		patientName: 'Maria Johansen',
		plannedStartTime: '2017-09-20 14:50',
		plannedEndTime: '2017-09-20 16:25',
		phases: [
			{
				id: 0,
				start: '2017-09-20 14:49',
				end: '2017-09-20 15:02'
			},
			{
				id: 1,
				start: '2017-09-20 15:02',
				end: '2017-09-20 15:13'
			},
			{
				id: 2,
				start: '2017-09-20 15:13',
				end: '2017-09-20 15:59'
			},
			{
				id: 3,
				start: '2017-09-20 15:59',
				end: '2017-09-20 16:06'
			},
			{
				id: 4,
				start: '2017-09-20 16:07',
				end: '2017-09-20 16:13'
			}
		],
		start: '2017-09-20 14:49',
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EG', fullName: 'Eldar Gjervik', phone: '+4712345678', position: 'assistant1'},
			{initials: 'TN', fullName: 'Thomas Nygård', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Eldar Gjervik',
		assistant2: 'Thomas Nygård',
		careUnitName: 'OTDP',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-09-20',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 170,
		weight: 62,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 3,
		theater: 1,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 08:00',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 09:40'
			}
		],
		patientName: 'Asle Seim',
		plannedStartTime: '2017-09-20 08:00',
		plannedEndTime: '2017-09-20 09:30',
		phases: [
			{
				id: 0,
				start: '2017-09-20 08:11',
				end: '2017-09-20 08:43'
			},
			{
				id: 1,
				start: '2017-09-20 08:43',
				end: '2017-09-20 09:00'
			},
			{
				id: 2,
				start: '2017-09-20 09:02',
				end: '2017-09-20 09:34'
			},
			{
				id: 3,
				start: '2017-09-20 09:36',
				end: '2017-09-20 09:45'
			},
			{
				id: 4,
				start: '2017-09-20 09:50',
				end: '2017-09-20 10:00'
			}
		],
		start: '2017-09-20 08:11',
		end: '2017-09-20 10:00',
		crew: [
			{initials: 'RGH', fullName: 'Roger Gran Hansen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'EG', fullName: 'Eldar Gjervik', phone: '+4712345678', position: 'assistant1'},
			{initials: 'TN', fullName: 'Thomas Nygård', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Eldar Gjervik',
		assistant2: 'Thomas Nygård',
		careUnitName: 'OTDP',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-09-20',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 170,
		weight: 62,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 4,
		theater: 2,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 09:20',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 11:00'
			}
		],
		patientName: 'Sarah Karlsen',
		plannedStartTime: '2017-09-20 09:20',
		plannedEndTime: '2017-09-20 10:20',
		phases: [
			{
				id: 0,
				start: '2017-09-20 09:30',
				end: '2017-09-20 09:43'
			},
			{
				id: 1,
				start: '2017-09-20 09:43',
				end: '2017-09-20 09:48'
			},
			{
				id: 2,
				start: '2017-09-20 09:48',
				end: '2017-09-20 10:00'
			},
			{
				id: 3,
				start: '2017-09-20 10:01',
				end: '2017-09-20 10:10'
			},
			{
				id: 4,
				start: '2017-09-20 10:11',
				end: '2017-09-20 10:23'
			}
		],
		start: '2017-09-20 09:30',
		end: '2017-09-20 10:23',
		crew: [
			{initials: 'ØI', fullName: 'Øyvind Iversen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'KK', fullName: 'Kaja Khan', phone: '+4712345678', position: 'assistant1'},
			{initials: 'OPH', fullName: 'Olav Per Høyset', phone: '+4712345678', position: 'assistant2'}],
		surgeon: 'Øyvind Iversen',
		assistant1: 'Kaja Khan',
		assistant2: 'Olav Per Høyset',
		careUnitName: 'ODP',
		operatingDate: '2017-09-20 12:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '2017-07-16',
		bloodType: 'A',
		asa: 1,
		diagnoseTypeFreeText: 'Fremmedlegme finger hø hånd',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: 'Botox',
		tils: 'S',
		priority: 1,
		messageFromBedWard: 'Ta INR v/ oppmøte DK\r\n',
		medicalInformation: 'Cave apocillin\r\nDETTE ER TELST 2\r\n',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 190,
		weight: 100,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 5,
		theater: 2,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 10:30',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 12:10'
			}
		],
		patientName: 'Jarl Grøtte',
		plannedStartTime: '2017-09-20 10:30',
		plannedEndTime: '2017-09-20 12:00',
		phases: [
			{
				id: 0,
				start: '2017-09-20 10:05',
				end: '2017-09-20 10:50'
			},
			{
				id: 1,
				start: '2017-09-20 10:52',
				end: '2017-09-20 11:15'
			},
			{
				id: 2,
				start: '2017-09-20 11:18',
				end: '2017-09-20 11:40'
			},
			{
				id: 3,
				start: '2017-09-20 11:41',
				end: '2017-09-20 11:48'
			},
			{
				id: 4,
				start: '2017-09-20 11:48',
				end: '2017-09-20 11:58'
			}
		],
		start: '2017-09-20 10:05',
		end: '2017-09-20 11:58',
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
		patientBirthDate: '1987-09-20',
		bloodType: 'B',
		asa: 2,
		diagnoseTypeFreeText: 'Meniskskade',
		procedureTypeFreeText: 'Artroskopi venstre kne, meniskreseksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'P',
		priority: 2,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\nPlanlagt på Røros men flyttet\r\n',
		medicalInformation: 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: true,
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
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 15:00',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 16:40'
			}
		],
		plannedStartTime: '2017-09-20 15:00',
		plannedEndTime: '2017-09-20 16:50',
		patientName: 'Andreas Halvorsen',
		phases: [
			{
				id: 0,
				start: '2017-09-20 15:11',
				end: '2017-09-20 15:23'
			},
			{
				id: 1,
				start: '2017-09-20 15:24',
				end: '2017-09-20 15:38'
			},
			{
				id: 2,
				start: '2017-09-20 15:45',
				end: '2017-09-20 16:15'
			},
			{
				id: 3,
				start: '2017-09-20 16:15',
				end: '2017-09-20 16:20'
			},
			{
				id: 4,
				start: '2017-09-20 16:22',
				end: '2017-09-20 16:35'
			}
		],
		start: '2017-09-20 15:11',
		crew: [
			{initials: 'LS', fullName: 'Laila Selle', phone: '+4712345678', position: 'kirurg'},
			{initials: 'HW', fullName: 'Hans Westbye', phone: '+4712345678', position: 'assistant1'}],
		surgeon: 'Laila Selle',
		assistant1: 'Hans Westbye',
		assistant2: '',
		careUnitName: 'OFS',
		operatingDate: '2017-09-20 15:30',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 15,
		patientBirthDate: '1982-09-20',
		bloodType: 'A',
		asa: 1,
		diagnoseTypeFreeText: 'Fremmedlegme finger hø hånd',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: '',
		tils: 'i',
		priority: 2,
		messageFromBedWard: 'Sengepost informert 5/10\r\nDETTE ER TELST 2\r\n',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 180,
		weight: 90,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 7,
		theater: 3,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 14:00',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 15:40'
			}
		],
		plannedStartTime: '2017-09-20 14:00',
		plannedEndTime: '2017-09-20 15:20',
		patientName: 'Lillian Andersen',
		phases: [
			{
				id: 0,
				start: '2017-09-20 14:05',
				end: '2017-09-20 14:20'
			},
			{
				id: 1,
				start: '2017-09-20 14:20',
				end: '2017-09-20 14:31'
			},
			{
				id: 2,
				start: '2017-09-20 14:33',
				end: '2017-09-20 14:45'
			},
			{
				id: 3,
				start: '2017-09-20 14:45',
				end: '2017-09-20 15:05'
			},
			{
				id: 4,
				start: '2017-09-20 15:06',
				end: '2017-09-20 15:30'
			},
		],
		start: '2017-09-20 14:05',
		end: '2017-09-20 15:30',
		crew: [
			{initials: 'HT', fullName: 'Heidi Tollefsen', phone: '+4712345678', position: 'kirurg'},
			{initials: 'KT', fullName: 'Kåre Tveit', phone: '+4712345678', position: 'assistant1'}],
		surgeon: 'Roger Gran Hansen',
		assistant1: 'Kåre Tveit',
		assistant2: '',
		careUnitName: 'OFS',
		operatingDate: '2017-09-20 11:11',
		arrivalTime: '2017-09-19 15:11',
		surgeonTime: 15,
		patientBirthDate: '2001-09-20',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 122,
		weight: 50,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 8,
		theater: 4,
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-09-20 13:00',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10,
				end: '2017-09-20 14:40'
			}
		],
		plannedStartTime: '2017-09-20 13:00',
		plannedEndTime: '2017-09-20 13:58',
		patientName: 'Hannah Wilhelmsen',
		phases: [
			{
				id: 0,
				start: '2017-09-20 13:07',
				end: '2017-09-20 13:20'
			},
			{
				id: 1,
				start: '2017-09-20 13:20',
				end: '2017-09-20 13:46'
			},
			{
				id: 2,
				start: '2017-09-20 13:48',
				end: '2017-09-20 14:11'
			},
			{
				id: 3,
				start: '2017-09-20 14:15',
				end: '2017-09-20 14:31'
			},
			{
				id: 4,
				start: '2017-09-20 14:34',
				end: '2017-09-20 14:47'
			},
		],
		start: '2017-09-20 13:07',
		end: '2017-09-20 14:47',
		crew: [
			{initials: 'KT', fullName: 'Kåre Tveit', phone: '+4712345678', position: 'kirurg'}],
		surgeon: 'Kåre Tveit',
		assistant1: '',
		assistant2: '',
		careUnitName: 'OTDP',
		operatingDate: '2017-09-20 17:11',
		arrivalTime: '2017-09-20 15:11',
		surgeonTime: 10,
		patientBirthDate: '1987-09-20',
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
		propolDate: '2017-09-20',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16'
	},
	{
		id: 9,
		theater: 4,
		patientName: 'Ellen',
		plannedPhases: [
			{
				name: 'pretime',
				start: '2017-10-20 13:00',
				duration: 30
			},
			{
				name: 'knifetime',
				duration: 60
			},
			{
				name: 'posttime',
				duration: 10
			}
		],
		phases: [
			{
				id: 0,
				start: '2017-10-20 13:07',
				end: '2017-10-20 13:20'
			},
			{
				id: 1,
				start: '2017-10-20 13:20',
				end: '2017-10-20 13:46'
			},
			{
				id: 2,
				start: '2017-10-20 13:48',
			},
			{
				id: 3
			},
			{
				id: 4
			},
		],
		start: '2017-10-20 13:07',
		end: '2017-10-20 13:48',
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


export const planningPhases = {
	pretime: {
		color: '#F9F9EE'
	},
	knifetime: {
		color: '#DAD9C0'
	},
	posttime: {
		color: '#F9F9EE'
	},
}

export const operationPhases = [
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