module.exports = function churchService(churchModel, models, SaphyreError) {

	var Church = models.ccb.Church;

	this.list = function() {
		return churchModel.list();
	}

	this.create = function (church) {
		return Church.create({
			code : church.code,
			name : church.name,
			immobile_type : church.immobileType
		})
	}
	return this;
}