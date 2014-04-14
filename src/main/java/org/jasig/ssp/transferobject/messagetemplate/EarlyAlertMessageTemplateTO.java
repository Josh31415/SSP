package org.jasig.ssp.transferobject.messagetemplate;

import org.jasig.ssp.model.EarlyAlert;
import org.jasig.ssp.model.Person;
import org.jasig.ssp.transferobject.EarlyAlertTO;

public class EarlyAlertMessageTemplateTO extends EarlyAlertTO {


	private static final long serialVersionUID = 1432740352046594692L;
	
	private CoachPersonLiteMessageTemplateTO person;
	
	private CoachPersonLiteMessageTemplateTO coach;
	
	private CoachPersonLiteMessageTemplateTO creator;
	
	public EarlyAlertMessageTemplateTO(EarlyAlert earlyAlert, Person creator) {
		super(earlyAlert);
		if(creator != null)
			this.creator = new CoachPersonLiteMessageTemplateTO(creator);
	}

	public EarlyAlertMessageTemplateTO(EarlyAlert earlyAlert) {
		super(earlyAlert);
	}
	
	public CoachPersonLiteMessageTemplateTO getPerson() {
		return person;
	}

	public void setPerson(CoachPersonLiteMessageTemplateTO person) {
		this.person = person;
	}
	
	public CoachPersonLiteMessageTemplateTO getCoach() {
		return coach;
	}

	public void setCoach(CoachPersonLiteMessageTemplateTO coach) {
		this.coach = coach;
	}

	public CoachPersonLiteMessageTemplateTO getCreator() {
		return creator;
	}

	public void setCreator(CoachPersonLiteMessageTemplateTO creator) {
		this.creator = creator;
	}

	@Override
	public final void from(EarlyAlert model){
		super.from(model);
		person = new CoachPersonLiteMessageTemplateTO(model.getPerson());
		if(model.getPerson().getCoach() != null){
			coach = new CoachPersonLiteMessageTemplateTO(model.getPerson().getCoach());
		}
	}

}